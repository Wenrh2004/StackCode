import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import './content.scss'

export const Content = () => {
  const content = useLoaderData() as ContentType
  const submit = useSubmit()
  return (
    <Form method="PUT">
      <main className="content-page" key={content.id}>
        <input name="title" defaultValue={content.title} onChange={(e) => submit(e.target.form)} />
        <textarea
          name="content"
          defaultValue={content.content}
          onChange={(e) => submit(e.target.form)}
        />
      </main>
    </Form>
  )
}
