import React from 'react';
import { useSearch } from './SearchContext.tsx';

const SearchFilters: React.FC = () => {
  const { query, setQuery } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchFilters;
