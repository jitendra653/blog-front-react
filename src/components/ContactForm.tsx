import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-3">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-600 mb-8">
          Contact us to publish your content and show ads to our website and get a good reach.
        </p>
      </div>
      <div className="flex space-x-4">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="bg-purple-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-7.89a1.5 1.5 0 012.12 0L21 8m-5 13h6m-6 0a2 2 0 01-2-2m2 2a2 2 0 01-2-2m0 2H5a2 2 0 01-2-2V7a2 2 0 012-2h.72a1 1 0 01.7.29L11 7h8a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2">Office</h2>
          <p className="text-gray-600">Victoria Street, London, UK</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="bg-purple-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12A4 4 0 118 8a4 4 0 018 4zM12 14v6m-2 0h4" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2">Email</h2>
          <p className="text-gray-600">hello@zarrin.com</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <div className="bg-purple-500 p-4 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89-7.89a1.5 1.5 0 012.12 0L21 8m-5 13h6m-6 0a2 2 0 01-2-2m2 2a2 2 0 01-2-2m0 2H5a2 2 0 01-2-2V7a2 2 0 012-2h.72a1 1 0 01.7.29L11 7h8a2 2 0 012 2v10a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold mb-2">Phone</h2>
          <p className="text-gray-600">(001) 2342 3451</p>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="relative w-full">
        <div className="inset-0">
          <img src={`${process.env.PUBLIC_URL}/contact.png`} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative -mt-20 mb-28 bg-white shadow-lg rounded-lg mx-auto w-11/12 sm:w-3/4 lg:w-1/2 p-8">
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div className="col-span-1 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-max mx-auto inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:border-purple-700 hover:bg-white hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default ContactForm;
