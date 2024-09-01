import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const loading = useSelector((state:any) => state.loader.loading);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-12 w-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm2 0a6 6 0 0112 0 6 6 0 01-12 0z"
          />
        </svg>
        Loading...
      </div>
    </div>
  );
};

export default Loader;

