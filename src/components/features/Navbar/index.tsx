import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-md font-medium transition ${
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
            <Link to='/borrow-summary' className={linkClass('/borrow-summary')}>
              Borrow History
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden text-gray-700 hover:text-blue-600 focus:outline-none'
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden px-4 pb-4'>
          <Link
            to='/books'
            className={linkClass('/books')}
            onClick={() => setIsOpen(false)}
          >
            All Books
          </Link>
          <Link
            to='/books/new'
            className={linkClass('/books/new')}
            onClick={() => setIsOpen(false)}
          >
            Add Book
          </Link>
          <Link
            to='/borrow-summary'
            className={linkClass('/borrow-summary')}
            onClick={() => setIsOpen(false)}
          >
            Borrow History
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
