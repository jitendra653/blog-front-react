import React from 'react';

const SubscriptionForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-purple-700 text-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Get our stories delivered from us to your inbox weekly.</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-white text-black mb-2 md:mb-0 md:mr-2"
        />
        <button className="text-white border  border-white bg-purple-700 hover:text-purple-700 hover:bg-white px-4 py-2 rounded-md">Get started</button>
      </div>
      <p className="text-sm">Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a response the following day.</p>
    </div>
  );
};

export default SubscriptionForm;
