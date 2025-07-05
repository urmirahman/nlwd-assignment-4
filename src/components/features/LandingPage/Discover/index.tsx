import React from 'react';

interface FeaturedBook {
  title: string;
  author: string;
  price: string;
}

const featuredBooks: FeaturedBook[] = [
  {
    title: 'The Man in the Glass House',
    author: 'Mark Lannister',
    price: '$14.99',
  },
  { title: 'A Map of the World', author: 'Jane Doe', price: '$45.00' },
  { title: 'Best of Enemies', author: 'John Smith', price: '$18.00' },
  { title: 'The New Income Cookbook', author: 'Amy Adams', price: '$18.00' },
];

const bgClasses = [
  'bg-gradient-to-br from-indigo-500 to-blue-400',
  'bg-gradient-to-br from-green-400 to-teal-500',
  'bg-gradient-to-br from-pink-500 to-red-400',
  'bg-gradient-to-br from-yellow-400 to-orange-300',
];

const DiscoverSection: React.FC = () => (
  <section className='px-6 md:px-16'>
    <h2 className='text-3xl font-bold mb-6'>Discover Your Next Book</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
      {featuredBooks.map((book, i) => (
        <div
          key={i}
          className='bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden'
        >
          <div
            className={`
              w-full h-60 
              ${bgClasses[i % bgClasses.length]} 
              flex items-center justify-center 
              text-white text-lg font-semibold 
              px-4 text-center
            `}
          >
            {book.title}
          </div>

          <div className='p-4'>
            <h3 className='font-semibold mb-1'>{book.title}</h3>
            <p className='text-sm text-gray-600 mb-2'>{book.author}</p>
            <span className='font-bold'>{book.price}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default DiscoverSection;
