import React from 'react';

interface CardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ image, category, date, title, description, link }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-64">
        <img className="absolute inset-0 w-full h-full object-cover" src={image} alt={title} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="mt-2">{description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 mb-1">
          {category} <span className="text-gray-400">{date}</span>
        </div>
        <a href={link} className="text-blue-500 hover:underline">Read More...</a>
      </div>
    </div>
  );
};

export default Card;
