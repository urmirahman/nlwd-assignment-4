import React from 'react';

interface GenreItem {
  name: string;
}

const genres: GenreItem[] = [
  { name: 'Adventure' },
  { name: 'Biography' },
  { name: 'Romance' },
  { name: 'Science Fiction' },
];

const bgClasses = [
  'bg-red-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
];

const GenreSection: React.FC = () => (
  <section className='bg-gray-50 py-12 px-6 md:px-16'>
    <h2 className='text-3xl font-bold text-center mb-8'>Browse by Genre</h2>
    <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
      {genres.map((g, i) => (
        <div key={i} className='text-center'>
          <div
            className={`
              w-full 
              h-32 
              rounded-lg 
              mb-2 
              flex items-center justify-center 
              text-xl font-semibold 
              ${bgClasses[i % bgClasses.length]}
            `}
          >
            {g.name}
          </div>
          <span className='font-medium text-gray-700'>{g.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default GenreSection;
