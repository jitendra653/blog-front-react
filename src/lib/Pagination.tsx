import React from 'react';

interface PaginationProps {
  blogsPerPage: number;
  totalBlogs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ blogsPerPage, totalBlogs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex -space-x-px justify-center">
        {pageNumbers.map(number => (
          <li key={number} className="px-1">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 border border-gray-300 text-gray-500 ${currentPage === number ? 'bg-purple-600 text-white' : 'hover:bg-gray-200'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
