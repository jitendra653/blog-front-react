import React from 'react'
import Card from '../Card'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import { formatDate } from '../../lib/utils'

const RecentPost: React.FC = () => {
  const blogs = useAppSelector((state) => state?.posts?.posts)
  const blogData = blogs.slice(3, 9)
  const [blogPost]:any = blogs.slice(1, 2)
  return (
    <>
      <section className="container mx-auto p-10">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold mb-6">Our Recent Post</h2>
          <div>
            <Link
              className="block py-2 px-4 rounded bg-purple-700 hover:bg-purple-600  md:hover:bg-transparent md:border md:border-purple-700 md:text-white md:hover:text-purple-600"
              to={'/blog'}
            >
              View All
            </Link>
          </div>
        </div>
        <div className="my-10 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              className="w-full h-full object-cover"
              src={`https://reactadvance.s3.eu-north-1.amazonaws.com/${blogPost?.image}`}
              alt="VR & AI Technology"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <div className="text-gray-600 text-sm font-semibold mb-2">
              {blogPost?.category} • {formatDate(blogPost?.createdAt)}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPost?.title}</h2>
            <div className="text-gray-700 mb-6" dangerouslySetInnerHTML={{ __html: blogPost?.description }}></div>
            <div className='w-max'>
              <Link
                to={`/post/${blogPost?.slug}`}
                className="block mt-10 py-2 px-4 w-max rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent  md:border md:border-purple-700 md:text-purple-700 md:hover:text-white"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((blog: any, index) => (
            <Card
              key={index}
              image={blog.image}
              category={blog.category}
              date={formatDate(blog.createdAt)}
              title={blog.title}
              description={blog.description}
              link={blog.slug}
            />
          ))}
        </div>
      </section>
    </>
  )
}
export default RecentPost
