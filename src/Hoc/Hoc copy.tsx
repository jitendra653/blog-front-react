import React, { useState } from 'react';
import withDataFetching from './withDataFetching.tsx';
import DataDisplay from './DataDisplay.tsx';

interface DataDisplayProps {
  query: string;
}

const getUrl = (props: DataDisplayProps, page: number) => 
  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${props.query}`;

const DataDisplayWithFetching = withDataFetching(DataDisplay, getUrl);

const Hoc: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={e => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      <DataDisplayWithFetching query={query} />
    </div>
  );
}

export default Hoc;
