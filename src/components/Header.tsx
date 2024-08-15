import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(()=>{
    setActiveLink(location.pathname)
  },[])
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false); // Close menu on link click for mobile and tablet
    }
  };

  return (
    <div className=" ">

      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center">
            {/* <div className="bg-white p-2 rounded-full">
          <img src="logo.svg" alt="Logo" className="h-8 w-8" />
        </div> */}
            <h1 className="text-2xl fill-white font-bold ml-2">
              <Link to={'/'}>
                <img src="logo.svg" alt="Logo" />
              </Link>
            </h1>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" focus:outline-none">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <nav className={`md:flex md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static bg-indigo-700 md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 z-40`}>
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <Link to={'/'} className={`${location.pathname == '/' ? 'text-purple-700':''} block py-2 px-4 rounded hover:text-purple-700 hover:bg-indigo-600 md:hover:bg-transparent`}>Home</Link>
              <Link to={'/blog'} className={`${location.pathname == '/blog' ? 'text-purple-700':''} block py-2 px-4 rounded hover:text-purple-700 hover:bg-indigo-600 md:hover:bg-transparent`}>Blog</Link>
              <Link to={'/about'} className={`${location.pathname == '/about' ? 'text-purple-700':''} block py-2 px-4 hover:text-purple-700 rounded hover:bg-indigo-600 md:hover:bg-transparent`}>About</Link>
              <button><Link to={'/contact'} className={`${location.pathname == '/contact' ? 'text-purple-700':''} block py-2 px-4 rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent md:border md:border-purple-700 md:text-purple-700 md:hover:text-white`}>Contact Us</Link></button>
            </div>
          </nav>
        </div>
      </header>
    </div>
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
