import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SubscriptionForm from './components/SubscriptionForm';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './NotFound';
import ContactForm from './components/ContactForm/ContactForm';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import Loader from './components/loader/Loader';
import store from './store/store';
import Counter from './Counter';
import ReactMemoItem from './ReactMemo/ReactMemoItem';
import ReactPureComponent from './ReactPureComponent/ReactPureComponent';
import VirtualizedList from './VirtualizedList/VirtualizedList';
import CompoundComponent from './CompoundComponent/CompoundComponent';
import RenderProp from './RenderPropComponent/RenderProp';
import Hoc from './HOC/Hoc';
import ReactRecoil from './ReactStatManagement/Recoil/ReactRecoil';
import ContextApi from './ContextApi/ContextApi';

// import Home from './Home';
// import Postview from './Postview';
// import Blog from './Blog';
const Home = React.lazy(() => import('./Home'))
const Postview = React.lazy(() => import('./Postview'))
const Blog = React.lazy(() => import('./Blog'))


const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <ErrorBoundary>
        <Suspense fallback={<div>Loading.....</div>}>
          <ToastContainer />
          <BrowserRouter>
            <Header />
            <div className="mt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/post/:postId" element={<Postview />} />
                <Route path="/recoil" element={<ReactRecoil />} />
                <Route path="/memo" element={<ReactMemoItem />} />
                <Route path="/pure" element={<ReactPureComponent />} />
                <Route path="/largelist" element={<VirtualizedList />} />
                <Route path="/compound" element={<CompoundComponent />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/renderprop" element={<RenderProp />} />
                <Route path="/hoc" element={<Hoc />} />
                <Route path="/contextapi" element={<ContextApi />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </div>
            <SubscriptionForm />
            <Footer />
          </BrowserRouter>
        </Suspense>
      </ErrorBoundary>
    </Provider>
  )
}

export default App;
