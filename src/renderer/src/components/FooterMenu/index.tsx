import { Add, Config } from '@icon-park/react'
import { Link, useSubmit } from 'react-router-dom'

export const FooterMenu = () => {
  const submit = useSubmit()
  return (
    <div className="nav">
      <Add
        theme="outline"
        size="20"
        strokeWidth={2}
        onClick={() => {
          submit(null, { method: 'POST' })
        }}
      />
      <Link to="/config">
        <Config theme="outline" size="20" strokeWidth={2} />
      </Link>
    </div>
  )
}
