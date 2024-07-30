import useSearch from '@renderer/hooks/useSearch'

export default function Search(): JSX.Element {
  const { handleSearch, search } = useSearch()
  return (
    <>
      <main className="bg-primary/90 p-2 rounded-t-lg shadow-md drag">
        <section className="bg-secondary/90 p-2 rounded-lg">
          <input
            value={search}
            onChange={handleSearch}
            autoFocus
            className="w-full outline-none text-mainwhite/90 text-xl rounded-lg bg-background/90 p-2"
          />
        </section>
        <section className="text-center text-white/90 font-light text-xs mt-2">
          {'KingYen.'}
        </section>
      </main>
    </>
  )
}
