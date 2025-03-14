import { Add } from '@icon-park/react'
import { Form, useSubmit } from 'react-router-dom'

export const ContentSearch = () => {
  const submit = useSubmit()
  return (
    <Form>
      <div className="border-b font-bold px-3 flex justify-center items-center">
        <input
          name="searchWord"
          type="text"
          placeholder="搜索……"
          className="outline-none  text-sm  py-1.5  w-full bg-slate-50"
          onChange={(e) => submit(e.target.form)}
        />
        <Add
          theme="outline"
          size="20"
          strokeWidth={2}
          onClick={() => submit(null, { method: 'POST' })}
        />
      </div>
    </Form>
  )
}
