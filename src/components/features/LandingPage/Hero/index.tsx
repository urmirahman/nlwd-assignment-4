import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner: React.FC = () => (
  <section
    className='
      relative 
      h-[60vh] 
      bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 
      flex items-center justify-center
    '
  >
    <div className='absolute inset-0 bg-black bg-opacity-40' />

    <div className='relative z-10 flex flex-col justify-center items-center text-center px-4'>
      <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
        Welcome to Our Library
      </h1>
      <p className='text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl'>
        Discover your next favorite book, explore genres, and connect with great
        authors.
      </p>
      <Link
        to='/books'
        className='bg-white text-blue-600 hover:bg-gray-100 py-3 px-6 rounded-lg text-lg font-medium transition'
      >
        Browse Books
      </Link>
    </div>
  </section>
);

export default HeroBanner;
