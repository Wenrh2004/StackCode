import { NavLink, useFetcher } from 'react-router-dom'
import { FolderOpen } from '@icon-park/react'
import styles from './style.module.scss'
import { useStore } from '@renderer/store/useStore'
import useCategory from '@renderer/hooks/useCategory'

interface Props {
  category: CategoryType
}

export const CategoryItem = ({ category }: Props) => {
  const { contextMenu, dragHandle } = useCategory(category)
  const fetcher = useFetcher()
  const editCategoryId = useStore((state) => state.editCategoryId)
  const setEditCategoryId = useStore((state) => state.setEditCategoryId)
  return (
    <>
      {editCategoryId === category.id ? (
        <div className={styles.input}>
          <input
            defaultValue={category.name}
            name="name"
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                fetcher.submit({ id: category.id, name: e.currentTarget.value }, { method: 'PUT' })
                setEditCategoryId(0)
              }
            }}
          />
        </div>
      ) : (
        <NavLink
          onDoubleClick={() => {
            setEditCategoryId(category.id)
          }}
          to={`/config/category/contentList/${category.id}`}
          key={category.id}
          className={({ isActive }) => {
            return isActive ? styles.active : styles.link
          }}
          onContextMenu={contextMenu()}
          {...dragHandle}
        >
          <div className="flex item-center gap-1">
            <FolderOpen theme="outline" size="15" />
            <div className="truncate">{category.name}</div>
          </div>
        </NavLink>
      )}
    </>
  )
}
