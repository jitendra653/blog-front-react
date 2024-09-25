import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { hideLoader, showLoader } from '../../store/loaderActions';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
const ContactForm: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const validate = () => {
    let formIsValid = true
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      formIsValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      formIsValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
      formIsValid = false
    }

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/ // Validates 10 digits only
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      formIsValid = false
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number should be 10 digits'
      formIsValid = false
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
      formIsValid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      formIsValid = false
    }

    setErrors(newErrors)
    return formIsValid
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) {
      return // If validation fails, do not submit
    }

    dispatch(showLoader())

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        dispatch(hideLoader())
        toast.success('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setErrors({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      } else {
        dispatch(hideLoader())
        toast.error('Failed to send message.')
      }
    } catch (error) {
      console.error('Error:', error)
      dispatch(hideLoader())
      alert('An error occurred while sending the message.')
    }
  }



  return (
    <>
      <div className="flex flex-col items-center justify-center min-max my-20 bg-gray-50 py-3">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89-7.89a1.5 1.5 0 012.12 0L21 8m-5 13h6m-6 0a2 2 0 01-2-2m2 2a2 2 0 01-2-2m0 2H5a2 2 0 01-2-2V7a2 2 0 012-2h.72a1 1 0 01.7.29L11 7h8a2 2 0 012 2v10a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mb-2">Office</h2>
            <p className="text-gray-600">Radixweb Software Service</p>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12A4 4 0 118 8a4 4 0 018 4zM12 14v6m-2 0h4"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mb-2">Email</h2>
            <p className="text-gray-600">
              <a href="mailto:jitendrapatidar653@gmail.com">jitendrapatidar653@gmail.com</a>
            </p>
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89-7.89a1.5 1.5 0 012.12 0L21 8m-5 13h6m-6 0a2 2 0 01-2-2m2 2a2 2 0 01-2-2m0 2H5a2 2 0 01-2-2V7a2 2 0 012-2h.72a1 1 0 01.7.29L11 7h8a2 2 0 012 2v10a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold mb-2">Phone</h2>
            <p className="text-gray-600">
              <a href="tel:+91 7389232833">+91 7389232833</a>
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="relative w-full">
          <div className="inset-0">
            <img
              src={`${process.env.PUBLIC_URL}/contact.png`}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative -mt-20 mb-28 bg-white shadow-lg rounded-lg mx-auto w-11/12 sm:w-3/4 lg:w-2/5 p-8">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
                </div>
                <div className="col-span-1 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={8}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
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
      </div>
    </>
  )
};

export default ContactForm;
