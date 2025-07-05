import React, { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../_redux/api/booksApi';

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !author) {
      return;
    }
    try {
      await addBook({
        title,
        author,
        year: year ? Number(year) : undefined,
      }).unwrap();

      navigate('/books');
    } catch (err) {
      console.error('Failed to save the book', err);
    }
  };

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>Title</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Book title'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>Author</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder='Author name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>Year (optional)</label>
          <input
            type='number'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder='e.g. 2021'
          />
        </div>
        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
