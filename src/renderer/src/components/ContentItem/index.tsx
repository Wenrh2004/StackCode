import { NavLink, useSubmit } from 'react-router-dom'
import { Delete } from '@icon-park/react'
import dayjs from 'dayjs'
import { useContextMenu } from 'mantine-contextmenu'

interface Props {
  content: ContentType
}

export const ContentItem = ({ content }: Props) => {
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
  return (
    <NavLink
      to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
      key={content.id}
      className="flex justify-between items-center"
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size={16} strokeWidth={3} />,
            title: '删除',
            onClick: () => {
              submit({ id: content.id }, { method: 'DELETE' })
            },
          },
        ],
        { className: 'context-menu' },
      )}
    >
      <div className="truncate">{content.title}</div>
      <div className="text-[10px] opacity-70">{dayjs(content.created_at).format('YY/MM/DD')}</div>
    </NavLink>
  )
}
