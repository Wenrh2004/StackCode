import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useStore } from './store/useStore'

function App() {
  const setConfig = useStore((state) => state.setConfig)

  useEffect(() => {
    // 初始化配置
    const initConfig = async () => {
      try {
        // 初始化数据库表
        window.api.initTable()
      } catch (error) {
        console.error('初始化失败', error)
      }
    }
    initConfig()
  }, [setConfig])

  return <RouterProvider router={router} />
}

export default App
