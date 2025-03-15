import './assets/index.css'
import '@renderer/assets/globle.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@renderer/router'

import '@mantine/core/styles.layer.css'
import 'mantine-contextmenu/styles.layer.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
