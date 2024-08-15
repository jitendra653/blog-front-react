import React from 'react';

const FeaturePost: React.FC = () => {
  return (<>
  <div className="bg-gray-100 min-h-screen mb-40 h-max py-8 flex justify-center items-center">
    <div className="relative w-full md:w-5/6 lg:w-4/5 xl:w-3/4">
      <img
        src="feature.png"  // Replace with your image path
        alt="VR & AI Technology"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      <div className="absolute -bottom-32 right-0 w-5/6 bg-white p-6 rounded-b-lg">
        <p className="text-sm text-purple-600 font-semibold">DEVELOPMENT <span className="text-gray-600">16 March 2023</span></p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          How to make a Game look more attractive with New VR & AI Technology
        </h2>
        <p className="mt-2 text-gray-800">
          Google has been investing in AI for many years and bringing its benefits to individuals, businesses, and communities. Whether it's publishing state-of-the-art research, building helpful products, or developing tools and resources that enable others, we're committed to making AI accessible to everyone.
        </p>
        {/* <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition duration-300">
          Read More
        </button> */}
        <button className="block mt-10 py-2 px-4 rounded bg-purple-700 hover:bg-purple-600 md:bg-transparent  md:border md:border-purple-700 md:text-purple-700 md:hover:text-white">Read More</button>
      </div>
    </div>
  </div>
  </>
  );
};

export default FeaturePost;
