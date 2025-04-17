import { Code } from '@icon-park/react'

export const Welcome = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-sm text-slate-600 opactity-80">
      <Code theme="outline" size="48" fill="#0a0707cd" strokeWidth={3}></Code>
      欢迎使用「StackCode」提升工作效率
    </div>
  )
}
