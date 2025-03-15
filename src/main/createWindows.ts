import { is } from '@electron-toolkit/utils'
import { BrowserWindow, screen, shell } from 'electron'
import { join } from 'path'
import icon from '../../resources/icon.png?asset'
import BrowserWindowConstructorOptions = Electron.BrowserWindowConstructorOptions
import * as url from 'node:url'

export interface OptionsType extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
}

export function createWindow(options: OptionsType): BrowserWindow {
  // Get the screen size of the primary display
  const { width } = screen.getPrimaryDisplay().workAreaSize
  // Create the browser window.
  const mainWindow = new BrowserWindow(
    Object.assign(
      {
        width: 600,
        height: 600,
        x: width - width / 4,
        y: 0,
        show: false,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        autoHideMenuBar: true,
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
          preload: join(__dirname, '../preload/index.js'),
          sandbox: false,
        },
      },
      options,
    ),
  )
  if (is.dev && options.openDevTools) mainWindow.webContents.openDevTools() //TODO 测试控制台
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: join(__dirname, '../renderer/index.html'),
        protocol: 'file:',
        slashes: true,
        hash: 'config/category/contentList',
      }),
    )
  }

  return mainWindow
}
