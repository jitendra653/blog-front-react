import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">
          {category} <span className="text-gray-400">{date}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-gray-700 !font-normal mb-4 h-20 overflow-hidden" dangerouslySetInnerHTML={{ __html: description }}></div>
        <Link to={`/post/${link}`} className="text-purple-700 hover:underline">Read More...</Link>
      </div>
    </div>
  );
};

export default Card;
