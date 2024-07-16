import { useCallback, useEffect } from 'react'
import { useStore } from '@renderer/store/useStore'

export default () => {
  const id = useStore((state) => state.id)
  const data = useStore((state) => state.data)
  const setId = useStore((state) => state.setId)
  const setData = useStore((state) => state.setData)
  const setSearch = useStore((state) => state.setSearch)
  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      console.log(id, data)

      if (data.length === 0) return
      switch (e.code) {
        case 'ArrowUp': {
          e.preventDefault()
          const index = data.findIndex((item) => item.id === id)
          setId(data[index - 1]?.id || data[data.length - 1].id)
          break
        }
        case 'ArrowDown': {
          e.preventDefault()
          const index = data.findIndex((item) => item.id === id)
          setId(data[index + 1]?.id || data[0].id)
          break
        }
        case 'Enter': {
          selectItem(id)
        }
        default:
          break
      }
    },
    [data, id]
  )
  function selectItem(id: number) {
    const content = data.find((item) => item.id === id)?.content
    if (content)
      navigator.clipboard.writeText(content).then(() => {
        setData([])
        setSearch('')
        window.api.hideWindow()
      })
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent)
    return () => {
      document.removeEventListener('keydown', handleKeyEvent)
    }
  }, [handleKeyEvent])
  useEffect(() => {
    setId(data[0]?.id || 0)
  }, [data])
  return { data, id, selectItem }
}
