import { MutableRefObject } from 'react'

export default () => {
  const setIgnoreMouseEvents = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      console.log('no ignore')

      window.api.ignoreMouseEvents(false)
    })
    document.body?.addEventListener('mouseover', (e: MouseEvent) => {
      console.log(document.body, e.target)

      if (e.target === document.body) {
        console.log('ignore')
        window.api.ignoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { setIgnoreMouseEvents }
}
