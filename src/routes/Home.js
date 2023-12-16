import React from 'react';
import Navbar from '../components/Navbar';
import HomeMain from '../components/HomeMain';
import Footer from '../components/Footer';
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeMain />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
