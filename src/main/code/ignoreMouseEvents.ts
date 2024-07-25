import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

export default (mainWindow: BrowserWindow) => {
  ipcMain.on(
    'ignoreMouseEvents',
    (_event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
      //   console.log('ignoreMouseEvents', ignore, options)

      mainWindow.setIgnoreMouseEvents(ignore, options)
    },
  )
}
