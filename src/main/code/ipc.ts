import { BrowserWindow, ipcMain } from 'electron'

export const registerIPC = (window: BrowserWindow) => {
  ipcMain.on('hideWindow', () => {
    window.hide()
  })
}
