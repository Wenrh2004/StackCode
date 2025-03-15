import { Delete } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'
import styles from './styles.module.scss'
import useContent from '@renderer/hooks/useContent'
import { DragEvent } from 'react'

export default (category: CategoryType) => {
  const { updateContentCategory } = useContent()
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  const contextMenu = () => {
    return showContextMenu(
      [
        {
          key: 'remove',
          icon: <Delete theme="outline" size={16} strokeWidth={3} />,
          title: '删除',
          onClick: () => {
            submit({ id: category.id }, { method: 'DELETE' })
          },
        },
      ],
      { className: 'context-menu' },
    )
  }

  const dragHandle = {
    onDragOver: (e: DragEvent) => {
      e.preventDefault()
      e!.dataTransfer!.dropEffect = 'move'
      const el = e.currentTarget as HTMLDivElement
      el.classList.add(styles.darging)
    },
    onDragLeave: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.darging)
    },
    onDrop: (e: DragEvent) => {
      const el = e.currentTarget as HTMLDivElement
      el.classList.remove(styles.darging)
      const id = e!.dataTransfer!.getData('id')
      updateContentCategory(Number(id), category.id)
    },
  }
  return { contextMenu, dragHandle }
}
