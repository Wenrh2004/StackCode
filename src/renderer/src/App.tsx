import Search from './components/Search'
import Reslut from './components/Result'
import useShortCut from './hooks/useShortCut'

function App(): JSX.Element {
  const { registerSearch } = useShortCut()
  registerSearch('Search', 'CommandOrControl+Shift+;')
  return (
    <>
      <Search />
      <Reslut />
      {/* TODO:  将 Search 中的应用等进行独立，并添加快捷键提示 */}
    </>
  )
}

export default App
