import Search from './components/Search'
import Result from './components/Result'
import useShortCut from './hooks/useShortCut'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from './hooks/useIgnoreMouseEvents'

function App(): JSX.Element {
  // 快捷键注册
  const { registerSearch } = useShortCut()
  registerSearch('Search', 'CommandOrControl+Shift+;')
  // 鼠标穿透
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  useEffect(() => {
    setIgnoreMouseEvents(mainRef as MutableRefObject<HTMLDivElement>)
  }, [])
  return (
    <main className="p-3" ref={mainRef}>
      <section className="z-50 relative">
        <Search />
      </section>
      <section className="z-40 relative">
        <Result />
      </section>
    </main>
  )
}

export default App
