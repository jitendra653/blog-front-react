import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { formatDate } from '../lib/utils';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { getPostContent } from '../store/postSlice';

export default function Postview() {
  const { postId }: any = useParams();
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state?.posts);
  useEffect(() => {
    const content = posts?.posts && dispatch(getPostContent(postId))
  }, [postId, posts?.posts, dispatch])
  const post:any = posts?.postContent || {};
  return <>{(post?.title||false) && <div className="max-w-4xl mx-auto p-8">
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {post.title}      </h1>
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={`https://reactadvance.s3.eu-north-1.amazonaws.com/${post.image}`}
          alt={post.title}
          className="w-full h-auto"
        />
      </div>
    </header>

    <section className="text-lg leading-relaxed mb-8">
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </section>
    <footer className="text-center">
      <p className="text-sm text-gray-500">
        Published on {formatDate(post.createdAt)}, by Admin
      </p>
    </footer>
  </div>}</>
}
