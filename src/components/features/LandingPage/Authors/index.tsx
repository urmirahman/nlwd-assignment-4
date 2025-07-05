import React from 'react';

interface Author {
  name: string;
}

const authors: Author[] = [
  { name: 'Harold Stevens' },
  { name: 'Simon Lander' },
  { name: 'Amy Whitford' },
  { name: 'Julia Jule' },
];

const bgClasses = [
  'bg-gradient-to-br from-pink-500 to-red-400',
  'bg-gradient-to-br from-green-400 to-teal-500',
  'bg-gradient-to-br from-indigo-500 to-blue-400',
  'bg-gradient-to-br from-yellow-300 to-orange-400',
];

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('');

const AuthorsSection: React.FC = () => (
  <section className='bg-gray-50 py-12 px-6 md:px-16'>
    <h2 className='text-3xl font-bold text-center mb-8'>Noted Authors</h2>
    <div className='flex flex-wrap justify-center gap-8'>
      {authors.map((a, i) => (
        <div key={i} className='w-24 text-center'>
          <div
            className={`
              w-24 h-24 
              rounded-full 
              flex items-center justify-center 
              text-xl font-semibold text-white 
              ${bgClasses[i % bgClasses.length]}
            `}
          >
            {getInitials(a.name)}
          </div>
          <span className='block mt-2 text-gray-700'>{a.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default AuthorsSection;
