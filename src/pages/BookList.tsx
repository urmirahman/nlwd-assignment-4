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
import BookTable from '../components/features/Books/BookTable';
import BorrowModal from '../components/features/Borrow/BorrowModal';

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

      <BookTable
        books={books}
        borrowedIds={borrowedIds}
        onEdit={() => {}}
        onDelete={(id) => deleteBook(id)}
        onBorrow={openModal}
      />

      {showModal && selectedBook && (
        <BorrowModal
          book={selectedBook}
          quantity={quantity}
          isBorrowing={isBorrowing}
          setQuantity={setQuantity}
          onConfirm={handleBorrowConfirm}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default BookList;
