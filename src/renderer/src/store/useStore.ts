import { create } from 'zustand'
import { DataType } from '@renderer/data/codes'

interface StateProps {
  data: DataType[]
  setData: (data: DataType[]) => void
  search: string
  setSearch: (search: string) => void
  error: string
  setError: (error: string) => void
  id: number
  setId: (id: number) => void
}

export const useStore = create<StateProps>((set) => ({
  data: [],
  setData: (data) => set({ data }),
  search: '',
  setSearch: (content) => set({ search: content }),
  error: '',
  setError: (message) => set({ error: message }),
  id: 0,
  setId: (id) => set({ id })
}))
