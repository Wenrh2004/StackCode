export default async ({ request, params }) => {
  const data = await request.formData()
  return await window.api.sql(
    `update contents
     set title=@title,
         content=@content
     where id = @id`,
    'update',
    {
      title: data.get('title'),
      content: data.get('content'),
      id: params.id,
    },
  )
}
