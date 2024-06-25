import { BrowserWindow, IpcMainInvokeEvent, app, globalShortcut, ipcMain } from 'electron'

const config = {}

export const registerShortCut = (window: BrowserWindow) => {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: string, shortCut: string) => {
    config[type] = shortCut
    switch (type) {
      case 'Search':
        return regitserSearchShortCut(window, shortCut)
      default:
        return null // Add a default return statement
    }
  })
}

function regitserSearchShortCut(window: BrowserWindow, shortCut: string) {
  // register a global shortcut of create a new code window
  return globalShortcut.register(shortCut, () => {
    window.isVisible() ? window.hide() : window.show()
  })
}

app.on('will-quit', () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll()
})
