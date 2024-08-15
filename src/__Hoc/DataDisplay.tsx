import React, { useEffect, useRef } from 'react';

interface DataDisplayProps {
  data: any[];
  loading: boolean;
  error: Error | null;
  retryFetch: () => void;
  fetchNextPage: () => void;
  hasMore: boolean;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data, loading, error, retryFetch, fetchNextPage, hasMore }) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastDataElementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        fetchNextPage();
      }
    });

    if (lastDataElementRef.current) {
      observer.current.observe(lastDataElementRef.current);
    }
  }, [loading, hasMore, fetchNextPage]);

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
      <h1>Fetched Data:</h1>
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
      {!loading && hasMore && <div ref={lastDataElementRef}></div>}
    </div>
  );
};

export default DataDisplay;
