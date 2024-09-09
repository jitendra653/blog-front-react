import { atom } from 'recoil'

// Todo type definition
export interface Todo {
  id: number
  text: string
  isCompleted: boolean
}

// Define atom to store list of todos
export const todoListState = atom<Todo[]>({
  key: 'todoListState', // unique ID for the atom
  default: [], // initial value is an empty array
})

// Define atom to store the current filter
export const todoFilterState = atom<string>({
  key: 'todoFilterState',
  default: 'All', // Default filter is "All"
})
