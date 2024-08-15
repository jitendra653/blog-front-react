// src/components/AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (<>
    <div className="flex flex-col items-center text-center py-12 bg-gray-100">
      <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">About Us</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Creative Blog Writing and Publishing Site</h1>
      <p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic worldview of disruptive innovation via workplace diversity and empowerment.
      </p>
      <div className="max-w-4xl mx-auto">
        <img
          src="/about.png" // Replace with the actual path to your image
          alt="Team working together"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    
    <div className="flex flex-col items-center py-12 bg-white">
      <h2 className="text-lg uppercase tracking-widest text-gray-600 mb-2">How We Work</h2>
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        I will show you how our team works
      </h1>
      <p className="text-md md:text-lg text-gray-700 text-center max-w-2xl mb-12">
        Bring to the table win-win market strategies to ensure perfect articles.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-2xl font-bold mb-2">01</h3>
          <h4 className="text-xl font-semibold mb-4">Brainstorming</h4>
          <p className="mb-4">
            Bring to the table win-win survival strategies to ensure proactive domination.
            At the end of the day, going forward, a new normal that has evolved from generation X
            is on the runway heading towards a streamlined cloud solution.
          </p>
          <a href="#" className="text-white font-bold underline">Learn More</a>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-2xl font-bold text-gray-400 mb-2">02</h3>
          <h4 className="text-xl font-semibold mb-4">Analysing</h4>
          <p className="mb-4">
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
            Override the digital divide with additional clickthroughs from DevOps.
          </p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-2xl font-bold text-gray-400 mb-2">03</h3>
          <h4 className="text-xl font-semibold mb-4">News Publishing</h4>
          <p className="mb-4">
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative thinking to further
            the overall value proposition.
          </p>
        </div>
      </div>
    </div>
    
    
    
    
    
    
    </>
  );
};

export default AboutUs;
