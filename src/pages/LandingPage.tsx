import React from 'react';
import Hero from '../components/features/LandingPage/Hero';
import Discover from '../components/features/LandingPage/Discover';
import Genre from '../components/features/LandingPage/Genre';
import TopBooks from '../components/features/LandingPage/TopBooks';
import Authors from '../components/features/LandingPage/Authors';
import Newsletter from '../components/features/LandingPage/Newsletter';

const LandingPage: React.FC = () => (
  <div className='space-y-24'>
    <Hero />
    <Discover />
    <Genre />
    <TopBooks />
    <Authors />
    <Newsletter />
  </div>
);

export default LandingPage;
