import React from 'react'
import { Todo, todoListState } from './todoAtoms'
import { useRecoilState } from 'recoil'

interface TodoItemProps {
  todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const toggleCompletion = () => {
    const newList = todoList.map((item) => (item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item))
    setTodoList(newList)
  }

  const deleteTodo = () => {
    setTodoList(todoList.filter((item) => item.id !== todo.id))
  }

  return (
    <li className="flex justify-between items-center p-2 my-2 bg-gray-100 rounded-md">
      <span className={todo.isCompleted ? 'line-through text-gray-500' : ''}>{todo.text}</span>
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleCompletion}
          className={`px-2 py-1 rounded ${todo.isCompleted ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
        >
          {todo.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={deleteTodo} className="px-2 py-1 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
