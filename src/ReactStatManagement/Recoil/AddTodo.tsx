import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from './todoAtoms'

const AddTodo: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addTodo = () => {
    if (!inputValue.trim()) return

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Math.random(),
        text: inputValue,
        isCompleted: false,
      },
    ])
    setInputValue('')
  }

  return (
    <div className="flex mt-4">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
        placeholder="Add a new todo"
      />
      <button onClick={addTodo} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
        Add
      </button>
    </div>
  )
}

export default AddTodo
