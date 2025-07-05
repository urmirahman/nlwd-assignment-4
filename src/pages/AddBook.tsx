import React, { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddBookMutation } from '../_redux/api/booksApi';

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [copies, setCopies] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !author || !genre) return;

    try {
      await addBook({
        title,
        author,
        genre,
        description: description || undefined,
        isbn: isbn ? Number(isbn) : undefined,
        copies: copies ? Number(copies) : 1,
      }).unwrap();

      navigate('/books');
    } catch (err) {
      console.error('Failed to save the book:', err);
    }
  };

  return (
    <div className='p-6 max-w-md mx-auto bg-white rounded shadow'>
      <h2 className='text-2xl font-bold mb-4'>Add New Book</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
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

        <div>
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

        <div>
          <label className='block font-medium mb-1'>Genre</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder='Genre (e.g., Fiction, History)'
            required
          />
        </div>

        <div>
          <label className='block font-medium mb-1'>
            Description (optional)
          </label>
          <textarea
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Brief description of the book'
            rows={3}
          />
        </div>

        <div>
          <label className='block font-medium mb-1'>Copies</label>
          <input
            type='number'
            min={1}
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
            placeholder='e.g. 3'
            required
          />
        </div>

        <div>
          <label className='block font-medium mb-1'>ISBN (optional)</label>
          <input
            type='number'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            placeholder='e.g. 9780553380163'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded disabled:opacity-50'
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Book'}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
