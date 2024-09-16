import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { fetchPosts } from '../store/postSlice'
import { hideLoader, showLoader } from '../store/loaderActions'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const posts = useAppSelector((state) => state.posts?.posts)
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(showLoader())
    } else {
      dispatch(hideLoader())
    }
  }, [posts, dispatch])
  return (
    <div className=" ">
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4 py-3 md:px-8">
          <div className="flex items-center">
            <h1 className="text-2xl fill-white font-bold ml-2">
              <Link to={'/'}>
                <img src="Logo.svg" alt="Logo" />
              </Link>
            </h1>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" focus:outline-none">
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <nav
            className={`md:flex md:space-x-4 ${
              isMenuOpen ? 'block' : 'hidden'
            } md:block absolute md:static bg-indigo-700 md:bg-transparent w-full md:w-auto left-0 top-14 md:top-0 z-40`}
          >
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <Link
                to={'/'}
                className={`${
                  location.pathname === '/' ? 'text-purple-700' : ''
                } block py-2 px-4 rounded hover:text-purple-700 hover:bg-indigo-600 md:hover:bg-transparent`}
              >
                Home
              </Link>
              <Link
                to={'/blog'}
                className={`${
                  location.pathname === '/blog' ? 'text-purple-700' : ''
                } block py-2 px-4 rounded hover:text-purple-700 hover:bg-indigo-600 md:hover:bg-transparent`}
              >
                Blog
              </Link>
              <Link
                to={'/about'}
                className={`${
                  location.pathname === '/about' ? 'text-purple-700' : ''
                } block py-2 px-4 hover:text-purple-700 rounded hover:bg-indigo-600 md:hover:bg-transparent`}
              >
                About
              </Link>
              <button>
                <Link
                  to={'/contact'}
                  className={`${
                    location.pathname === '/contact' ? 'text-purple-700' : ''
                  } block py-2 px-4 rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent md:border md:border-purple-700 md:text-purple-700 md:hover:text-white`}
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
