import Database, * as BetterSQLite3 from 'better-sqlite3'
import { resolve } from 'path'
import { app } from 'electron'
import { existsSync } from 'node:fs'
import config from './config'

const db = (): BetterSQLite3.Database => {
  let dir = resolve(app.getPath('home'), 'Desktop', 'hd.db')
  if (config.databaseDirectory && existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
    dir = resolve(dir, 'hd.db')
  }
  const db: BetterSQLite3.Database = new Database(dir, {})
  db.pragma('journal_mode = WAL')
  return db
}

export { db }
