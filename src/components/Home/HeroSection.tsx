import React from 'react'
import { useAppSelector } from '../../hooks/useAppSelector'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
  const blogs = useAppSelector((state) => state?.posts?.posts)
  const [blogPost]: any = blogs.slice(0, 1)

  return (
    <section className="min-max bg-gradient-to-b from-indigo-600 to-purple-500 text-white">
      <main>
        <div className="flex flex-col items-center justify-center text-center px-4 py-16 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">{blogPost?.title}</h2>
            <div className="mt-4 text-lg" dangerouslySetInnerHTML={{ __html: blogPost?.description }}></div>
            <div className="py-14">
              <Link
                to={`/post/${blogPost?.slug}`}
                className=" border  border-white bg-white text-purple-700 hover:bg-transparent hover:text-white px-4 py-2 rounded-md"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={`https://reactadvance.s3.eu-north-1.amazonaws.com/${blogPost?.image}`}
              width={'70%'}
              height={'70%'}
              alt="AI"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </section>
  )
}

export default HeroSection
