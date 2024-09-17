import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () =>{ 
  const location = useLocation();

  return (
  <footer>
    <div className="bg-white py-4 md:py-6 border-t border-purple-200">
      <div className="container mx-auto flex flex-col items-center px-4">
        <div className="text-xl md:text-2xl font-bold text-purple-600 mb-4">
          <img src="/Logo.svg" alt="" />
        </div>
        <nav className="mb-4 text-sm sm:text-base">
           <Link to={'/'} className={`${location.pathname === '/' ?'text-purple-700':'text-gray-600'} px-2 py-1 hover:text-purple-600`}>Home</Link>
           <Link to={'/blog'} className={`${location.pathname === '/blog' ? 'text-purple-700':'text-gray-600'} px-2 py-1 hover:text-purple-600`}>Blog</Link>
           <Link to={'/about'} className={`${location.pathname === '/about' ? 'text-purple-700':'text-gray-600'} px-2 py-1 hover:text-purple-600`}>About</Link>
           <Link to={'/contact'} className={`${location.pathname === '/contact' ? 'text-purple-700':'text-gray-600'} px-2 py-1 hover:text-purple-600`}>Contact Us</Link>
        </nav>
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-purple-600 text-lg sm:text-xl"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-purple-600 text-lg sm:text-xl"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-purple-600 text-lg sm:text-xl"/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-purple-600 text-lg sm:text-xl"/>
          </a>
        </div>
        <p className="text-gray-500 text-xs sm:text-sm">© Ideapeel Inc 2023. All Rights Reserved</p>
      </div>
    </div>
  </footer>
)};

export default Footer;
