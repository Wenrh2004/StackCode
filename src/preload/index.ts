import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  hideWindow: () => {
    ipcRenderer.send('hideWindow')
  },
  shortCut: (type: string, shortCut: string) => {
    return ipcRenderer.invoke('shortCut', type, shortCut)
  },
  ignoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => {
    ipcRenderer.send('ignoreMouseEvents', ignore, options)
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
