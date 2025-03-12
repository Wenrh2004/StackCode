import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import useShortCut from '@renderer/hooks/useShortCut'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'

function Home(): JSX.Element {
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
    <main className="theme-dark" ref={mainRef}>
      <section className="z-50 relative">
        <Search />
      </section>
      <section className="z-40 relative">
        <Result />
      </section>
    </main>
  )
}

export default Home
