import './contentList.scss'
import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import dayjs from 'dayjs'
import { Add } from '@icon-park/react'

export const ContentList = () => {
  const contents = useLoaderData() as ContentType[]
  const submit = useSubmit()
  return (
    <main className="content-list-page">
      <div className="list">
        <Form>
          <div className="border-b font-bold px-3 flex justify-center items-center">
            <input
              name="searchWord"
              type="text"
              placeholder="搜索……"
              className="outline-none  text-sm  py-1.5  w-full bg-slate-50"
              onChange={(e) => submit(e.target.form)}
            />
            <Add
              theme="outline"
              size="20"
              strokeWidth={2}
              onClick={() => submit({ action: 'add' }, { method: 'POST' })}
            />
          </div>
        </Form>

        {contents.map((content) => (
          <NavLink
            to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
            key={content.id}
            className="flex justify-between items-center"
          >
            <div className="truncate">{content.title}</div>
            <div className="text-[10px] opacity-70">
              {dayjs(content.created_at).format('YY/MM/DD')}
            </div>
          </NavLink>
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
