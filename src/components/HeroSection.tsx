import React from 'react';

const HeroSection: React.FC = () => {
  return (
       <section className="min-h-screen bg-gradient-to-b from-indigo-600 to-purple-500 text-white">
      <main className="pt-20 md:pt-16">
        <div className="flex flex-col items-center justify-center text-center px-4 py-16 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold">How AI will Change the Future</h2>
            <p className="mt-4 text-lg">The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction.</p>
            {/* <button className="mt-8 px-6 py-3 bg-white text-purple-600  font-semibold hover:bg-gray-100"></button> */}
         <div className='py-14'>
      
            <button className=" border  border-white bg-white text-purple-700 hover:bg-transparent hover:text-white px-4 py-2 rounded-md">Read more</button>
    
         </div>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img src="header.png" width={"70%"} height={"70%"} alt="AI" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
