import React from 'react';
import { SearchProvider, useSearch } from './SearchContext.tsx';
import withDataFetching from './withDataFetching.tsx';
import DataDisplay from './DataDisplay.tsx';
import SearchFilters from './SearchFilters.tsx';


interface DataDisplayProps {
  query: string;
}

const getUrl = (props: DataDisplayProps, page: number) => 
  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&q=${props.query}`;

const DataDisplayWithFetching = withDataFetching(DataDisplay, getUrl);

const DataDisplayContainer: React.FC = () => {
  return <DataDisplayWithFetching />;
}

const Hoc: React.FC = () => {
  return (
    <SearchProvider>
      <SearchFilters />
      <DataDisplayContainer />
    </SearchProvider>
  );
}

export default Hoc;
