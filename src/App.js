import React from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import SubscriptionForm from './components/SubscriptionForm.tsx';
import AboutUs from './components/AboutUs.tsx';
import Home from './Home.tsx';
import Postview from './Postview.tsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound.tsx';
import ContactForm from './components/ContactForm.tsx';
import Blog from './Blog.tsx';

const App = () => {
  return (<BrowserRouter>
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
  </BrowserRouter>);
}

export default App;
