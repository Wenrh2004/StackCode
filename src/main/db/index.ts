import Database, * as BetterSQLite3 from 'better-sqlite3'
import { resolve } from 'path'
import { app } from 'electron'

const file = resolve(app.getPath('home'), 'Desktop', 'hd.db')
const db: BetterSQLite3.Database = new Database(file, {})
db.pragma('journal_mode = WAL')
export { db }
