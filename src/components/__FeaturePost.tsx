import React from 'react';

const FeaturePost: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img className="w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-18GVXtbTcpVNXOFb4RmYUC1yNjTdTiGruO6RRwEFXxcehqQj6doK6xYW31VI47RbR0&usqp=CAU" alt="VR & AI Technology" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <div className="text-gray-600 text-sm font-semibold mb-2">DEVELOPMENT • 16 March 2023</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to make a Game look more attractive with New VR & AI Technology</h2>
        <p className="text-gray-700 mb-6">
          Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities. 
          Whether it's publishing state-of-the-art research, building helpful products, or developing tools and resources that enable others, 
          we're committed to making AI accessible to everyone.
        </p>
        <button className="bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 focus:outline-none">
          Read More
        </button>
      </div>
    </div>
  );
};

export default FeaturePost;
