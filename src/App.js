// src/App.js
import React from 'react';
import Home from './pages/LandingPage/Home';
import Banner from './pages/LandingPage/Banner';
import Experts from './pages/LandingPage/Experts'; 
import NewsLetter from './pages/LandingPage/NewsLetter'; 
import Plans from './pages/LandingPage/Plans';
import Footer from './pages/LandingPage/Footer'; 
// import Heading from './pages/BlogPage/Heading'; 
// import Breadcrumb from './pages/BlogPage/Breadcrumb'; 
// import Main from './pages/BlogPage/Main'; 
// import Blogstories from './pages/BlogPage/Blogstories';
// import BlogCard from './pages/BlogPage/BlogCard';
// import Card from './componentes/Card';
// import BlogNewsletter from './pages/BlogPage/BlogNewsletter';
// import BlogFooter from './pages/BlogPage/BlogFooter';
// import Blogcard from './pages/BlogPage/Blogcard';

function App() {
  return (
    <>
      <Home />
      <Banner /> 
      <Experts /> 
       <NewsLetter />
      <Plans />
      <Footer />
      {/* <Heading />
      <Breadcrumb />
      <Main />
      <Blogstories />
      <BlogCard />
      <BlogNewsletter />
      <BlogFooter /> */}
      {/* <Card/> */}
    </>
  );
}

export default App;
