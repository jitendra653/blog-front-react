import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SubscriptionForm from './components/SubscriptionForm';
import AboutUs from './components/AboutUs';
import Home from './Home';
import Postview from './Postview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';
import ContactForm from './components/ContactForm';
import Blog from './Blog';
import Hoc from './Hoc/Hoc'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
  <ErrorBoundary>
  <BrowserRouter>
    <Header />
    <div className='mt-16'>
      <Routes>
        {/* <Route path="/" element={<Hoc />}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:productId" element={<Postview />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
    <SubscriptionForm />
    <Footer />
  </BrowserRouter>
  </ErrorBoundary>);
}

export default App;
