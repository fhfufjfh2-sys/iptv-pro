import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Showcase from './components/Showcase';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Reviews />
      <Showcase />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
