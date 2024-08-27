import React from 'react';
import { SearchProvider, useSearch } from './SearchContext';
import withDataFetching from './withDataFetching';
import DataDisplay from './DataDisplay';
import SearchFilters from './SearchFilters';


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
