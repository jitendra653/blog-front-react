import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import Card from './components/Card';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from './store/loaderActions';
import { formatDate } from './lib/utils';
import { FixedSizeList as List } from 'react-window';

interface ApiData {
  [key: string]: any;
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<ApiData[]>([]);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      dispatch(showLoader());
      const requestOptions: any = {
        method: "GET",
        redirect: "follow",
        mode: 'no-cors'
      };

      fetch("/api/post", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          setBlogs(result);
          dispatch(hideLoader());
        })
        .catch((error) => {
          dispatch(hideLoader());
          console.error({ error })
        });
    };
    fetchData();
  }, [dispatch]);

  // Calculate current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // Row component for rendering each blog item
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const blog = currentBlogs[index];
    return (
      <div style={style}>
        <Card
          image={blog.image}
          category={blog.category}
          date={formatDate(blog.createdAt)}
          title={blog.title}
          description={blog.description}
          link={blog.slug}
        />
      </div>
    );
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Our Blogs</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Find our all blogs from here
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our blogs are written from very research research and well known writers so that we can provide
            you the best blogs and articles for you to read them all along
          </p>
        </div>
        <div className="mt-10">
          <List
            height={600} // Adjust based on your layout
            itemCount={currentBlogs.length}
            itemSize={200} // Adjust based on your Card component height
            width="100%"
          >
            {Row}
          </List>
        </div>
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={blogs.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Blog;
