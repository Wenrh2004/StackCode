import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'
import { getByNameWindow } from './windows'

const config = {
  search: '',
}

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: string, shortCut: string) => {
  config[type] = shortCut
  switch (type) {
    case 'Search':
      return registerSearchShortCut(getByNameWindow('search'), shortCut)
    default:
      return null // Add a default return statement
  }
})

function registerSearchShortCut(window: BrowserWindow, shortCut: string) {
  // register a global shortcut of create a new code window
  return globalShortcut.register(shortCut, () => {
    window.isVisible() ? window.hide() : window.show()
  })
}

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
