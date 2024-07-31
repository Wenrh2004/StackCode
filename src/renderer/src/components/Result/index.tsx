import classNames from 'classnames'
import useSelect from '@renderer/hooks/useSelect'
import './styles.css'

export default function Result() {
  const { data, id, selectItem } = useSelect()
  return (
    <>
      <main className="result">
        {/* TODO: 只展示5个搜索结果，并支持滚动 */}
        {data.map((item) => (
          <div
            key={item.id}
            className={classNames({ active: item.id == id })}
            onClick={() => selectItem(item.id)}
          >
            {item.content}
          </div>
        ))}
      </main>
      {/* TODO： 实现快捷键提示 */}
      <section className=" bg-secondary/90 text-mainwhite z-10 p-2 text-xs rounded-b-lg">
        快捷键提示
      </section>
    </>
  )
}
