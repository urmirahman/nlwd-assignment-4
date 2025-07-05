import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetBooksQuery,
  useDeleteBookMutation,
} from '../_redux/api/booksApi';
import { borrowBook } from '../_redux/slices/borrowSlice';
import { type RootState } from '../_redux/store';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: books, isLoading, error } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const borrowedIds = useSelector(
    (state: RootState) => state.borrow.borrowedIds,
  );

  const handleBorrow = (id: number) => {
    dispatch(borrowBook(id));
  };

  if (isLoading) {
    return <div className='p-4 text-center'>Loading books...</div>;
  }
  if (error) {
    return (
      <div className='p-4 text-center text-red-500'>Error loading books.</div>
    );
  }

  return (
    <div className='p-6 bg-white'>
      <h1 className='text-2xl font-bold mb-4'>Library Books</h1>

      <Link
        to='/books/new'
        className='inline-block mb-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded'
      >
        + Add New Book
      </Link>

      {/* Books table */}
      <table className='min-w-full border border-gray-300'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left py-2 px-4 border-b'>Title</th>
            <th className='text-left py-2 px-4 border-b'>Author</th>
            <th className='text-left py-2 px-4 border-b'>Year</th>
            <th className='text-left py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book.id} className='border-b hover:bg-gray-50'>
              <td className='py-2 px-4'>{book.title}</td>
              <td className='py-2 px-4'>{book.author}</td>
              <td className='py-2 px-4'>{book.year || '—'}</td>
              <td className='py-2 px-4'>
                <Link
                  to={`/books/${book.id}/edit`}
                  className='text-blue-600 hover:underline mr-4'
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteBook(book.id)}
                  className='text-red-600 hover:underline mr-4'
                >
                  Delete
                </button>

                <button
                  onClick={() => handleBorrow(book.id)}
                  className={`text-green-600 hover:underline ${
                    borrowedIds.includes(book.id)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={borrowedIds.includes(book.id)}
                >
                  {borrowedIds.includes(book.id) ? 'Borrowed' : 'Borrow'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
