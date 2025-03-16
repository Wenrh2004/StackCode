import { app, BrowserWindow, globalShortcut, ipcMain, IpcMainInvokeEvent } from 'electron'
import { getByNameWindow } from './windows'

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: string, shortCut: string) => {
  // console.log('shortCut', shortCut) //TODO 启动时会加载两次！
  if (shortCut == '') return false
  if (shortCut && globalShortcut.isRegistered(shortCut)) {
    // dialog.showErrorBox('温馨提示', '快捷键已被占用，请重新设置')
    return false
  }
  switch (type) {
    case 'search':
      return registerSearchShortCut(getByNameWindow('search'), shortCut)
    default:
      return null // Add a default return statement
  }
})

ipcMain.handle('delShortCut', (_event: IpcMainInvokeEvent, shortCut: string) => {
  if (shortCut !== '' && globalShortcut.isRegistered(shortCut)) {
    globalShortcut.unregister(shortCut)
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

// export const registerAppGlobalShortcut = () => {
//   const configData = config() as { shortCut: string }
//   if (configData.shortCut) {
//     registerSearchShortCut(getByNameWindow('search'), configData.shortCut)
//   }
// }
