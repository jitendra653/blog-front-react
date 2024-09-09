import { selector } from 'recoil'
import { todoListState, todoFilterState } from './todoAtoms'

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const todos = get(todoListState)

    switch (filter) {
      case 'Completed':
        return todos.filter((todo) => todo.isCompleted)
      case 'Pending':
        return todos.filter((todo) => !todo.isCompleted)
      default:
        return todos
    }
  },
})
