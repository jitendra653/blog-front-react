import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-purple-700 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">How AI will Change the Future</h1>
        <p className="mt-4 text-lg">Exploring the potential of artificial intelligence in various fields.</p>
        <button className="mt-6 bg-white text-purple-700 px-6 py-2 rounded">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
