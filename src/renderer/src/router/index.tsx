import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home'
import Config from '@renderer/pages/Config'
import { Category } from '@renderer/pages/Category'
import CategoryLoader from '@renderer/pages/Category/CategoryLoader'
import { ContentList } from '@renderer/pages/ContentList'
import ContentListLoader from '@renderer/pages/ContentList/ContentListLoader'
import { Content } from '@renderer/pages/Content'
import ContentLoader from '@renderer/pages/Content/ContentLoader'
import ContentAction from '@renderer/pages/Content/ContentAction'
import { Welcome } from '@renderer/pages/Welcome'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'config',
    element: <Config />,
    children: [
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            index: true,
            element: <Welcome />,
          },
          {
            path: 'contentList/:cid',
            loader: ContentListLoader,
            element: <ContentList />,
            children: [
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
                element: <Content />,
              },
            ],
          },
        ],
      },
    ],
  },
])
export default router
