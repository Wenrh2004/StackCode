import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'
import { getByNameWindow } from './windows'
import { config, findOne } from './db/query'
// import { dialog } from 'electron'

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: string, shortCut: string) => {
  if (globalShortcut.isRegistered(shortCut)) {
    // dialog.showErrorBox('温馨提示', '快捷键已被占用，请重新设置')
    return false
  }
  //删除之前的快捷键
  const res = findOne(`select *
                       from config
                       where id = 1`) as { content: string }
  const oldShortCut = JSON.parse(res.content).shortCut as string
  switch (type) {
    case 'search':
      globalShortcut.unregister(oldShortCut)
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

export const registerAppGlobalShortcut = () => {
  const configData = config() as { shortCut: string }
  if (configData.shortCut) {
    registerSearchShortCut(getByNameWindow('search'), configData.shortCut)
  }
}
