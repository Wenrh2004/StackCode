import { createWindow } from './window'
import { registerIPC } from './ipc'
import { app } from 'electron'
import { registerShortCut } from './shortCut'

app.whenReady().then(() => {
  const mainWindow = createWindow()
  registerIPC(mainWindow)
  registerShortCut(mainWindow)
})
