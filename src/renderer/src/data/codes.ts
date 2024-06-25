export interface DataType {
  id: number
  content: string
}

export const data: DataType[] = [
  {
    id: 1,
    content: 'Hello, world!'
  },
  {
    id: 2,
    content: 'Hello, Electron!'
  },
  {
    id: 3,
    content: 'Hello, Vite!'
  },
  {
    id: 4,
    content: 'Hello, React!'
  },
  {
    id: 5,
    content: 'Hello, TypeScript!'
  }
] as DataType[]
