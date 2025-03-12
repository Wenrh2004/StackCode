import { BrowserWindow, ipcMain } from 'electron'
import { createConfigWindow } from '../config'

export const registerIPC = (window: BrowserWindow) => {
  ipcMain.on('hideWindow', () => {
    window.hide()
  })
  ipcMain.on('openConfigWindow', () => {
    createConfigWindow()
  })
}
