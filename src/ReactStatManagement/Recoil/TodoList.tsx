import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from './todoSelectors'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const todoList = useRecoilValue(filteredTodoListState)

  return (
    <ul className="mt-4">
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
