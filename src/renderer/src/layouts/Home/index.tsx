import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result'
import { MutableRefObject, useEffect, useRef } from 'react'
import useIgnoreMouseEvents from '@renderer/hooks/useIgnoreMouseEvents'
import { useStore } from '@renderer/store/useStore'

function Home(): JSX.Element {
  // 鼠标穿透
  const mainRef = useRef<HTMLDivElement | null>(null)
  const { setIgnoreMouseEvents } = useIgnoreMouseEvents()
  //快捷键
  const config = useStore((s) => s.config)
  window.api.shortCut('search', config.shortCut)

  window.api.setDatabaseDirectory(config.databaseDirectory)
  window.api.initTable()
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
