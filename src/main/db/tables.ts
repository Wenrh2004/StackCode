import { db } from './connect'

db.exec(`
  create table if not exists categories(
    id integer primary key autoincrement not null,
    name text not null,
    created_at text not null
  );
`)

db.exec(`
  create table if not exists content (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    created_at text not null
  );
`)

db.exec(`
  INSERT INTO categories (name,created_at) VALUES ('hd',datetime());
`)

db.exec(`
  INSERT INTO content (title, content, category_id, created_at)
  VALUES ('react', 'aaa', 1, datetime());
`)
