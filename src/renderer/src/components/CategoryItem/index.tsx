import { NavLink } from 'react-router-dom'
import { FolderOpen } from '@icon-park/react'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  return (
    <NavLink to={`/config/category/contentList/${category.id}`} key={category.id}>
      <div className="flex item-center gap-1">
        <FolderOpen theme="outline" size="12" />
        <div className="truncate">{category.name}</div>
      </div>
    </NavLink>
  )
}
