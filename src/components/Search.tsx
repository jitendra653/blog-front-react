import React, { useState } from 'react'
import { useAppSelector } from '../hooks/useAppSelector'
import { FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'


const Search: React.FC = () => {
  const [showInput, setShowInput] = useState(false)
    const [query, setQuery] = useState('')
      const suggestionsData = useAppSelector((state) => state.posts?.posts)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
console.log({ suggestionsData })

  const handleSearchToggle = () => {
    setShowInput(!showInput)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)

    if (value.length > 0) {
      const filtered = suggestionsData.filter((suggestion:any) =>
        suggestion.title.toLowerCase().includes(value.toLowerCase()),
      )
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions([])
    }
  }

  return (
    <div className="relative w-64 mx-auto mt-10 flex">
      {showInput && (
        <div className="mt-2">
          <input type="text" value={query} onChange={handleInputChange} placeholder="Search..." className="" />

          {filteredSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg">
              {filteredSuggestions.map((suggestion: any, i: number) => (
                <a
                  key={i}
                  href={`/post/${suggestion.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {suggestion.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      <button onClick={handleSearchToggle} className="px-4 py-2  rounded transition duration-200">
        {showInput ? <RxCross2 /> : <FaSearch />}
      </button>
    </div>
  )
}

export default Search
