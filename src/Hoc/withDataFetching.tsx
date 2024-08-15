import React, { useState, useEffect, useRef, ComponentType } from 'react';

interface WithDataFetchingProps {
  data: any[];
  loading: boolean;
  error: Error | null;
  retryFetch: () => void;
  fetchNextPage: () => void;
  hasMore: boolean;
}

function withDataFetching<T>(
  WrappedComponent: ComponentType<T & WithDataFetchingProps>,
  fetchUrl: (props: T, page: number) => string
) {
  return (props: T) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [retryCount, setRetryCount] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const cache = useRef<{ [key: string]: any[] }>({});

    const fetchData = async (url: string, page: number) => {
      if (cache.current[url]) {
        setData(prevData => [...prevData, ...cache.current[url]]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newData = await response.json();
        cache.current[url] = newData; // Cache the data
        setData(prevData => [...prevData, ...newData]);
        setHasMore(newData.length > 0);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    useEffect(() => {
      setLoading(true);
      fetchData(fetchUrl(props, page), page).catch(() => {
        setError(new Error('Failed to fetch data'));
        setLoading(false);
      });
    }, [fetchUrl, props, retryCount, page]);

    const retryFetch = () => {
      setLoading(true);
      setError(null);
      setRetryCount(retryCount + 1);
    };

    const fetchNextPage = () => {
      if (hasMore) {
        setPage(page + 1);
      }
    };

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        retryFetch={retryFetch}
        fetchNextPage={fetchNextPage}
        hasMore={hasMore}
        {...props}
      />
    );
  };
}

export default withDataFetching;
