import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-purple-500 text-white p-8 py-20 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Sorry!<br/> The link is broken, try to refresh or go to home</p>
        <Link to={'/'}>  <button className="bg-white text-purple-500 hover:bg-purple-500 hover:text-white border hover:border-white px-4 py-2 rounded-lg">
          Go To Home
        </button>
        </Link>
      
      </div>
    </div>
  );
};

export default NotFound;
