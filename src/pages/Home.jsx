import React from 'react';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import PopularTours from '../components/home/PopularTours';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedDestinations />
      <PopularTours />
      <Testimonials />
    </>
  );
};

export default Home;