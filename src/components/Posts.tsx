import React from 'react';

const Posts: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Recent Post</h2>
        <div className="flex flex-wrap justify-center">
          <div className="max-w-sm mx-4 mb-8">
            <img src="/path-to-your-image.jpg" alt="Post Thumbnail" className="rounded" />
            <h3 className="text-xl font-bold mt-4">How to make a Game look more attractive with New VR & AI Technology</h3>
            <p className="text-gray-600 mt-2">Discover the latest advancements in VR and AI technology and how they are changing the gaming industry.</p>
            <button className="mt-4 text-purple-600">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
