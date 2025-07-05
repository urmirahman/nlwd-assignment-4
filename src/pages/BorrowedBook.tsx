import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useGetBooksQuery } from '../_redux/api/booksApi';
import { returnBook } from '../_redux/slices/borrowSlice';
import { type RootState } from '../_redux/store';

const BorrowedBooks: React.FC = () => {
  const dispatch = useDispatch();
  const borrowedIds = useSelector(
    (state: RootState) => state.borrow.borrowedIds,
  );
  const { data: books, isLoading } = useGetBooksQuery();

  if (isLoading) {
    return <div className='p-4 text-center'>Loading borrowed books...</div>;
  }

  const borrowedBooks =
    books?.filter((book) => borrowedIds.includes(book.id)) || [];

  return (
    <div className='p-6 max-w-lg mx-auto'>
      <h2 className='text-2xl font-bold mb-4'>Borrowed Books</h2>
      {borrowedBooks.length === 0 ? (
        <p>No books borrowed yet.</p>
      ) : (
        <ul>
          {borrowedBooks.map((book) => (
            <li
              key={book.id}
              className='flex justify-between items-center border-b py-2'
            >
              <div>
                <span className='font-medium'>{book.title}</span> by{' '}
                {book.author} {book.year && `(${book.year})`}
              </div>
              <button
                onClick={() => dispatch(returnBook(book.id))}
                className='text-blue-600 hover:underline'
              >
                Return
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className='mt-4'>
        <Link to='/books' className='text-gray-700 hover:underline'>
          &larr; Back to Library
        </Link>
      </div>
    </div>
  );
};

export default BorrowedBooks;
