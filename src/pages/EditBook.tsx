import React, { useState, useEffect, type FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetBookQuery, useUpdateBookMutation } from '../_redux/api/booksApi';

const EditBook: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const bookId = id ? id : '0';

  const { data: res, isLoading } = useGetBookQuery(bookId, { skip: !bookId });
  const book = res?.data;
  const [updateBook, { isLoading: isSaving }] = useUpdateBookMutation();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setisbn] = useState('');

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setisbn(book.isbn?.toString() || '');
    }
  }, [book]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!bookId) return;
    try {
      await updateBook({
        id: bookId,
        data: { title, author, isbn: isbn ? Number(isbn) : undefined },
      }).unwrap();
      navigate('/books');
    } catch (err) {
      console.error('Failed to update the book', err);
    }
  };

  if (isLoading) {
    return <div className='p-4 text-center'>Loading book details...</div>;
  }
  if (!book) {
    return <div className='p-4 text-center text-red-500'>Book not found.</div>;
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>Title</label>
          <input
            type='text'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>isbn</label>
          <input
            type='number'
            className='w-full border border-gray-300 rounded px-3 py-2'
            value={isbn}
            onChange={(e) => setisbn(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded'
          disabled={isSaving}
        >
          {isSaving ? 'Updating...' : 'Update Book'}
        </button>
      </form>
    </div>
  );
};

export default EditBook;
