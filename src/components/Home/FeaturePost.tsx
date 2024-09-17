import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Link } from 'react-router-dom'
import { formatDate } from '../../lib/utils'

const FeaturePost: React.FC = () => {
  const blogs = useAppSelector((state) => state?.posts?.posts)
  const [blogPost]: any = blogs.slice(2, 3)
  return (
    <>
      <div className=" min-h-max mb-40 h-max py-8 flex justify-center items-center">
        <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
          <img
            src={`https://reactadvance.s3.eu-north-1.amazonaws.com/${blogPost?.image}`}
            alt=""
            className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-32 right-0 w-5/6 bg-white p-6 rounded-b-lg">
            <p className="text-sm text-purple-600 font-semibold">
              {blogPost?.category} <span className="text-gray-600">{formatDate(blogPost?.createdAt)}</span>
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">{blogPost?.title}</h2>
            <div className="mt-2 text-gray-800" dangerouslySetInnerHTML={{ __html: blogPost?.description }}></div>
            <div className="w-max">
              <Link
                to={`/post/${blogPost?.slug}`}
                className="w-max block mt-10 py-2 px-4 rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent  md:border md:border-purple-700 md:text-purple-700 md:hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturePost
