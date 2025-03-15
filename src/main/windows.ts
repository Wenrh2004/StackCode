import { createWindow, OptionsType } from './createWindows'
import { app, BrowserWindow, IpcMainEvent, IpcMainInvokeEvent } from 'electron'

export const config = {
  search: {
    id: 0,
    options: {
      hash: '',
      // openDevTools: true,
    },
  },
  config: {
    id: 0,
    options: {
      width: 900,
      height: 650,
      frame: true,
      transparent: false,
      hash: '/#config/category/contentList',
      // openDevTools: true,
    },
  },
} as Record<WindowNameType, { id: number; options: OptionsType }>

export const getByNameWindow = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  if (!win) {
    win = createWindow(config[name].options)
    config[name].id = win.id
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}

app.whenReady().then(() => {
  getByNameWindow('search')
})
