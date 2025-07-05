import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedBook {
  title: string;
  author: string;
}

const topBooks: FeaturedBook[] = [
  { title: 'The Man in the Glass House', author: 'Mark Lannister' },
  { title: 'A Map of the World', author: 'Jane Doe' },
  { title: 'Best of Enemies', author: 'John Smith' },
  { title: 'The New Income Cookbook', author: 'Amy Adams' },
  { title: 'A Journey Through Time', author: 'Lara Byron' },
  { title: 'Mysteries of the Deep', author: 'Coral Shore' },
];

const bgClasses = [
  'bg-gradient-to-br from-red-400 to-pink-400',
  'bg-gradient-to-br from-blue-400 to-indigo-500',
  'bg-gradient-to-br from-green-400 to-teal-500',
  'bg-gradient-to-br from-yellow-300 to-orange-400',
  'bg-gradient-to-br from-purple-400 to-blue-500',
  'bg-gradient-to-br from-pink-300 to-purple-400',
];

const TopBooksSection: React.FC = () => (
  <section className='px-6 md:px-16'>
    <h2 className='text-3xl font-bold mb-6'>Our Top Books for 2025</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
      {topBooks.map((book, i) => (
        <div
          key={i}
          className='bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col'
        >
          <div
            className={`
              ${bgClasses[i % bgClasses.length]} 
              w-full h-40 
              rounded-t-lg 
              flex items-center justify-center 
              text-white text-center px-2
            `}
          >
            <span className='font-semibold'>{book.title}</span>
          </div>

          <div className='p-4 flex-1 flex flex-col justify-between'>
            <div>
              <h4 className='font-semibold mb-1 text-gray-800'>{book.title}</h4>
              <p className='text-gray-600 text-sm mb-3'>{book.author}</p>
            </div>
            <Link to='/books' className='mt-auto text-blue-600 hover:underline'>
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TopBooksSection;
