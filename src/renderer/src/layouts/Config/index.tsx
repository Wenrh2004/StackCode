import { Outlet } from 'react-router-dom'
//右键菜单
import { MantineProvider } from '@mantine/core'
import { ContextMenuProvider } from 'mantine-contextmenu'

export default function Config() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <ContextMenuProvider>
        <main>
          <Outlet />
        </main>
      </ContextMenuProvider>
    </MantineProvider>
  )
}
