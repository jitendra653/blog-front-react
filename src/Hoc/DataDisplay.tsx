import React from 'react';

interface DataDisplayProps {
  data: any[];
  setData:any;
  loading: boolean;
  error: Error | null;
  retryFetch: () => void;
  fetchNextPage: () => void;
  hasMore: boolean;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, loading, error, setData,retryFetch, fetchNextPage, hasMore }) => {
  if (loading && data.length === 0) {
    return <div>Loading...</div>;
  }

  if (error && data.length === 0) {
    return (
      <div>
        Error: {error.message}
        <button onClick={retryFetch}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Fetched Datfdfa:</h1>
      {/* <ul>
        {data.map((item, index) => (
          <li key={index}>{index}----{JSON.stringify(item)}</li>
        ))}
      </ul> */}
       <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div>Loading more...</div>}
      {!loading && hasMore && <button onClick={fetchNextPage}>Load More</button>}
    </div>
  );
};

export default DataDisplay;
