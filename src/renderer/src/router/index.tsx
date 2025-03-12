import { createHashRouter } from 'react-router-dom'
import Home from '@renderer/pages/Home'
import Config from '@renderer/pages/Config'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'config',
    element: <Config />,
  },
])
export default router
