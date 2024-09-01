import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { hideLoader, showLoader } from '../store/loaderActions';

const SubscriptionForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(showLoader());
    if (emailRef.current?.value) {
      const email = emailRef.current.value;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
          body: JSON.stringify({ email }),
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        dispatch(hideLoader());
        toast.success('Subscription successful!');
        console.log('Subscription successful!');
        emailRef.current.value = '';  // Clear input on successful subscription
      } catch (error) {
        dispatch(hideLoader());
        toast.error('Error subscribing')
        console.error('Error subscribing:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-purple-700 text-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get our stories delivered from us to your inbox weekly.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center mb-4">
        <input
          type="email"
          placeholder="Your Email"
          ref={emailRef}
          className="p-2 rounded-md bg-white text-black mb-2 md:mb-0 md:mr-2"
          required
        />
        <button
          type="submit"
          className="text-white border border-white bg-purple-700 hover:text-purple-700 hover:bg-white px-4 py-2 rounded-md"
        >
          Get started
        </button>
      </form>
      <p className="text-sm">
        Get a response tomorrow if you submit by 9pm today. If we receive after 9pm, you'll get a response the following day.
      </p>
    </div>
  );
};

export default SubscriptionForm;
