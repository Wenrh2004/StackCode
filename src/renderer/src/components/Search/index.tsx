import useCodeSearch from '@renderer/hooks/useCodeSearch'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useCodeSearch()
  return (
    <main className="bg-stone-50 p-3 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg">
        <input
          value={search}
          onChange={handleSearch}
          className="w-full outline-none text-stone-500 text-2xl rounded-lg bg-slate-200"
        />
      </section>
      <section className="text-center text-stone-500/50 font-light text-xs mt-2">
        {'KingYen.'}
      </section>
    </main>
  )
}
