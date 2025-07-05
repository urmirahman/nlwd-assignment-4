import React from 'react';

const LoaderSpinner: React.FC = () => (
  <div className='flex items-center justify-center py-12'>
    <div
      className='w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'
      aria-label='Loading…'
    />
  </div>
);

export default LoaderSpinner;
