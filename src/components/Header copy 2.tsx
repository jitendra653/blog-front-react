import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false); // Close menu on link click for mobile and tablet
    }
  };

  return (
    <header className="text-purple-800 fixed bg-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          
<img src="logo.svg" alt="Logo"  />


        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav
          className={`fixed  bg-white md:flex md:items-center md:space-x-6 top-0 right-0 w-full md:w-auto  shadow-md md:shadow-none transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:translate-x-0 z-40`}
        >
          <a
            href="#home"
            onClick={() => handleLinkClick('#home')}
            className={`block px-4 py-2 ${
              activeLink === '#home' ? 'bg-purple-600' : 'hover:bg-purple-600'
            }`}
          >
            Home
          </a>
          <a
            href="#posts"
            onClick={() => handleLinkClick('#posts')}
            className={`block px-4 py-2 ${
              activeLink === '#posts' ? 'bg-purple-600' : 'hover:bg-purple-600'
            }`}
          >
            Posts
          </a>
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className={`block px-4 py-2 ${
              activeLink === '#contact' ? 'bg-purple-600' : 'hover:bg-purple-600'
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="bg-purple-800 text-white p-4 relative">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">Logo</div>
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-3xl focus:outline-none z-50"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <FaTimes /> : <FaBars />} {/* Use icons */}
//         </button>
//         <nav
//           className={`fixed lg:static top-0 right-0 w-full lg:w-auto bg-purple-800 lg:bg-transparent shadow-md lg:shadow-none transition-transform transform ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:translate-x-0 z-40`}
//         >
//           <a href="#home" className="block px-4 py-2 hover:bg-purple-600">Home</a>
//           <a href="#posts" className="block px-4 py-2 hover:bg-purple-600">Posts</a>
//           <a href="#contact" className="block px-4 py-2 hover:bg-purple-600">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useState } from 'react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <header className="bg-purple-800 text-white p-4 relative">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">Logo</div>
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-3xl focus:outline-none z-50"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           )}
//         </button>
//         <nav
//           className={`fixed lg:static top-0 right-0 w-full lg:w-auto bg-purple-800 lg:bg-transparent shadow-md lg:shadow-none transition-transform transform ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:translate-x-0 z-40`}
//         >
//           <a href="#home" className="block px-4 py-2 hover:bg-purple-600">Home</a>
//           <a href="#posts" className="block px-4 py-2 hover:bg-purple-600">Posts</a>
//           <a href="#contact" className="block px-4 py-2 hover:bg-purple-600">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;





// import React, { useState } from 'react';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="bg-purple-800 text-white p-4 relative">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-2xl font-bold">Logo</div>
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-3xl focus:outline-none z-50"
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//         <nav
//           className={`${
//             isMenuOpen ? 'block' : 'hidden'
//           } lg:flex lg:items-center lg:space-x-6 fixed lg:static top-0 right-0 w-full lg:w-auto bg-purple-800 lg:bg-transparent lg:shadow-none shadow-md transition-transform transform ${
//             isMenuOpen ? 'translate-x-0' : 'translate-x-full'
//           } lg:translate-x-0 z-40`}
//         >
//           <a href="#home" className="block px-4 py-2 lg:inline hover:bg-purple-600 rounded-md transition-colors">Home</a>
//           <a href="#posts" className="block px-4 py-2 lg:inline hover:bg-purple-600 rounded-md transition-colors">Posts</a>
//           <a href="#contact" className="block px-4 py-2 lg:inline hover:bg-purple-600 rounded-md transition-colors">Contact</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
