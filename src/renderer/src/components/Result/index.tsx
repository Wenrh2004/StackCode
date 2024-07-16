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
      <section className="bg-stone-400/75 z-10 px-3 rounded-b-lg -mt-2 pt-2">快捷键提示</section>
    </>
  )
}
