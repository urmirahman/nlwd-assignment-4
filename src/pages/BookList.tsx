import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetBooksQuery,
  useDeleteBookMutation,
  useBorrowBookMutation,
} from '../_redux/api/booksApi';
import { borrowBook } from '../_redux/slices/borrowSlice';
import { type RootState } from '../_redux/store';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: res, isLoading, error } = useGetBooksQuery();
  const books = res?.data || [];
  const [deleteBook] = useDeleteBookMutation();
  const borrowedIds = useSelector(
    (state: RootState) => state.borrow.borrowedIds,
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [borrowBookApi, { isLoading: isBorrowing }] = useBorrowBookMutation();

  const openModal = (book: any) => {
    setSelectedBook(book);
    setQuantity(1);
    setShowModal(true);
  };

  const handleBorrowConfirm = async () => {
    if (selectedBook && quantity <= selectedBook.copies) {
      try {
        await borrowBookApi({
          book: selectedBook._id,
          quantity,
          dueDate: new Date().toISOString(),
        }).unwrap();

        dispatch(borrowBook(selectedBook._id));
        setShowModal(false);
      } catch (err) {
        console.error('Borrow failed:', err);
      }
    }
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
            <th className='text-left py-2 px-4 border-b'>isbn</th>
            <th className='text-left py-2 px-4 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book) => (
            <tr key={book._id} className='border-b hover:bg-gray-50'>
              <td className='py-2 px-4'>{book.title}</td>
              <td className='py-2 px-4'>{book.author}</td>
              <td className='py-2 px-4'>{book.isbn || '—'}</td>
              <td className='py-2 px-4'>
                <Link
                  to={`/books/${book._id}/edit`}
                  className='text-blue-600 hover:underline mr-4'
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteBook(book._id)}
                  className='text-red-600 hover:underline mr-4'
                >
                  Delete
                </button>

                <button
                  onClick={() => openModal(book)}
                  className={`text-green-600 hover:underline ${
                    borrowedIds.includes(book._id)
                      ? 'opacity-50 cursor-not-allowed'
                      : ''
                  }`}
                  disabled={borrowedIds.includes(book._id)}
                >
                  {borrowedIds.includes(book._id) ? 'Borrowed' : 'Borrow'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* //need to make reuseable compoenent for modal˚ */}
      {showModal && selectedBook && (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
          <div className='bg-white rounded shadow-lg p-6 w-full max-w-sm'>
            <h3 className='text-xl font-semibold mb-4'>
              Borrow: {selectedBook.title}
            </h3>

            <label className='block mb-2'>
              Quantity (max {selectedBook.copies}):
              <input
                type='number'
                min={1}
                max={selectedBook.copies}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className='w-full mt-1 px-3 py-2 border rounded'
              />
            </label>

            {quantity > selectedBook.copies && (
              <p className='text-red-500 text-sm mb-2'>
                Quantity exceeds available copies.
              </p>
            )}

            <div className='flex justify-end gap-4 mt-6'>
              <button
                onClick={handleBorrowConfirm}
                disabled={quantity > selectedBook.copies || isBorrowing}
                className='px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50'
              >
                {isBorrowing ? 'Processing...' : 'Confirm Borrow'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;
