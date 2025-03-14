import { ipcMain, IpcMainInvokeEvent } from 'electron'
import * as query from './query'

ipcMain.handle(
  'sql',
  (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params = {}) => {
    return query[type](sql, params)
  },
)
