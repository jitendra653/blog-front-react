import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-purple-700 text-white py-16">
      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left md:pr-8">
          <p className="text-sm uppercase tracking-wide mb-2">Featured Post</p>
          <h1 className="text-4xl font-bold mb-4">How AI will Change the Future</h1>
          <p className="text-lg mb-6">
            The future of AI will see home robots having enhanced intelligence, increased capabilities, 
            and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.
          </p>
          <button className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-md shadow-md">
            Read more
          </button>
        </div>
        <div className="flex-1 mt-6 md:mt-0 flex justify-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU" alt="AI Future" className="rounded-lg shadow-lg max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
