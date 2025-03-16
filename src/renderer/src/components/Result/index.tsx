import classNames from 'classnames'
import useSelect from '@renderer/hooks/useSelect'
import './styles.css'
import { useEffect, useRef } from 'react'

export default function Result() {
  const { data, id, selectItem } = useSelect()
  const activeItemRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLElement>(null)

  // 当id变化时，自动滚动到选中项
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      activeItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [id])

  return (
    <>
      <main ref={containerRef} className="result hide-scrollbar overflow-y-auto max-h-[185px]">
        {data.map((item) => (
          <div
            key={item.id}
            ref={item.id === id ? activeItemRef : null}
            className={classNames('overflow-hidden', { active: item.id == id })}
            onClick={() => selectItem(item.id)}
          >
            {item.title}
          </div>
        ))}
      </main>
      {/* TODO： 实现快捷键提示 */}
      <section className=" bg-secondary/90 text-mainwhite z-10 p-2 text-xs rounded-b-lg">
        <button className="select-none" onClick={() => window.api.openWindow('code')}>
          code
        </button>
        快捷键提示
        <span
          className="text-blue-600 cursor-pointer select-none"
          onClick={() => window.api.openWindow('config')}
        >
          config
        </span>
      </section>
    </>
  )
}
