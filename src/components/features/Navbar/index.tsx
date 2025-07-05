import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md font-medium transition ${
      pathname === path
        ? 'bg-blue-600 text-white'
        : 'text-gray-700 hover:bg-blue-100'
    }`;

  return (
    <nav className='bg-white shadow sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <Link to='/' className='text-xl font-bold text-blue-600'>
            📚 Library System
          </Link>

          <div className='hidden md:flex space-x-4'>
            <Link to='/books' className={linkClass('/books')}>
              All Books
            </Link>
            <Link to='/books/new' className={linkClass('/books/new')}>
              Add Book
            </Link>
            <Link to='/borrowed' className={linkClass('/borrow-summary')}>
              Borrow History
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
