import React from 'react';

const Footer: React.FC = () => (
  <footer className='bg-gray-800 text-gray-200 py-6'>
    <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm'>
      <p>© 2025 Library System. All rights reserved.</p>
      <p className='mt-2 md:mt-0'>
        Built with React, Redux Toolkit, RTK Query & Tailwind CSS.
      </p>
      <p className='mt-2 md:mt-0'>
        Build by{' '}
        <a
          href='https://urmirahman.vercel.app/'
          className='text-blue-400 hover:underline'
        >
          Urmi Rahman
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
