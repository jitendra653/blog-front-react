import React from 'react'
import { useRecoilState } from 'recoil'
import { todoFilterState } from './todoAtoms'

const FilterOptions: React.FC = () => {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  return (
    <div className="flex space-x-2 mt-4">
      {['All', 'Completed', 'Pending'].map((f) => (
        <button
          key={f}
          className={`px-4 py-2 rounded ${filter === f ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  )
}

export default FilterOptions
