import { ChangeEvent } from 'react'
import { useStore } from '@renderer/store/useStore'

export default () => {
  const setData = useStore((state) => state.setData)
  const { search, setSearch } = useStore((state) => state)
  const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    const data = await window.api.sql(
      `select *
        from contents
        where title like @content`,
      'findAll',
      { content: `%${e.target.value}%` },
    )
    setData(data as ContentType[])
  }
  return { search, handleSearch }
}
