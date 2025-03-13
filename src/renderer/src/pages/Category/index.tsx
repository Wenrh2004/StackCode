import './category.scss'
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import { Add, Config, FolderOpen } from '@icon-park/react'
import { useEffect } from 'react'

export const Category = () => {
  const categories = useLoaderData() as CategoryType[]
  const navigate = useNavigate()
  useEffect(() => {
    if (categories.length) {
      const category = categories[0]
      navigate(`/config/category/contentList/${category.id}`)
    }
  }, [categories])
  return (
    <main className="category-page">
      <div className="categories">
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <div className="flex item-center gap-1">
              <FolderOpen theme="outline" size="12" />
              <div className="truncate">{category.name}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className="nav">
        <Add theme="outline" size="20" strokeWidth={2} />
        <Config theme="outline" size="20" strokeWidth={2} />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
