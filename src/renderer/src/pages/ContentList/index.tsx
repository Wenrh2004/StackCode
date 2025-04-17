import './contentList.scss'
import { Outlet, useLoaderData } from 'react-router-dom'
import { ContentSearch } from '@renderer/components/ContentSearch'
import { ContentItem } from '@renderer/components/ContentItem'

export const ContentList = () => {
  const contents = useLoaderData() as ContentType[]

  return (
    <main className="content-list-page">
      <div className="list">
        <ContentSearch />

        {contents.map((content) => (
          <ContentItem content={content} key={content.id} />
        ))}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </main>
  )
}
