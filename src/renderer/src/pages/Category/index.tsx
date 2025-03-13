import './category.scss'
import { Outlet } from 'react-router-dom'
import { Add, DatabaseSetting } from '@icon-park/react'

export const Category = () => {
  return (
    <main className="category-page">
      <div className="categories">categories</div>
      <div className="nav">
        <Add theme="outline" size="20" strokeWidth={2} />
        <DatabaseSetting theme="outline" size="20" strokeWidth={2} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
