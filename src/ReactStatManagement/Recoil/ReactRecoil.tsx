// import React from 'react'
// import Input from './Input/Input'
// import { RecoilRoot } from 'recoil'
// import CharCount from './Input/CharCount'

// const CharCountRecoil = () => {
//     return (
//         <div>
//             <RecoilRoot>
//                 <Input />
//                 <CharCount />
//             </RecoilRoot>
//         </div>
//     )
// }

// export default CharCountRecoil



import React from 'react'
import { RecoilRoot } from 'recoil'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import FilterOptions from './FilterOptions'

const ReactRecoil: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <AddTodo />
        <FilterOptions />
        <TodoList />
      </div>
    </RecoilRoot>
  )
}

export default ReactRecoil

