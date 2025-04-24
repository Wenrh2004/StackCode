import './styles.scss'
import { Form } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '@renderer/store/useStore'

export const Setting = () => {
  // const submit = useSubmit()
  // const config = useLoaderData() as ConfigDataType
  const [keys, setKeys] = useState<string[]>([])
  const config = useStore((s) => s.config)
  const setConfig = useStore((s) => s.setConfig)
  return (
    <Form method="POST">
      <main className="setting-page">
        <h1>软件配置</h1>
        <section>
          <h5>快捷键定义</h5>
          <input
            type="text"
            name="shortCut"
            readOnly
            defaultValue={config.shortCut}
            onKeyDown={(e) => {
              if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
                const code = e.code.replace(/Left|Right|Key|Digit/, '')
                if (keys.includes(code)) return
                window.api.delShortCut(e.currentTarget.value)
                keys.push(code)
                setKeys(keys)
                if (code.match(/^(\w|Space)$/gi)) {
                  e.currentTarget.value = keys.join('+')
                  setKeys([])
                  setConfig({ ...config, shortCut: e.currentTarget.value })
                  window.api.shortCut('search', e.currentTarget.value)
                }
              }
            }}
          />
        </section>
        <section>
          <h5>文件存储位置</h5>
          <input
            type="text"
            name="databaseDirectory"
            readOnly
            defaultValue={config.databaseDirectory}
            onClick={async (e: any) => {
              const path = await window.api.selectDatabaseDirectory()
              setConfig({ ...config, databaseDirectory: path })
              e.target.value = path
            }}
          />
        </section>
      </main>
    </Form>
  )
}
