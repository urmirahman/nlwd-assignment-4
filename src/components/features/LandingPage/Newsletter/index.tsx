import React from 'react';

const NewsletterSection: React.FC = () => (
  <section className='px-6 md:px-16 pb-16 text-center'>
    <h2 className='text-3xl font-bold mb-4'>Stay Updated</h2>
    <p className='text-gray-700 mb-6'>
      Subscribe to our newsletter for the latest arrivals and events.
    </p>
    <form className='max-w-md mx-auto flex flex-col sm:flex-row gap-4'>
      <input
        type='email'
        placeholder='Your email address'
        className='flex-1 border border-gray-300 rounded-lg px-4 py-2'
      />
      <button
        type='submit'
        className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg'
      >
        Subscribe
      </button>
    </form>
  </section>
);

export default NewsletterSection;
