import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetBooksQuery,
  useDeleteBookMutation,
  useBorrowBookMutation,
  type Book,
} from '../_redux/api/booksApi';
import { borrowBook } from '../_redux/slices/borrowSlice';
import { type RootState } from '../_redux/store';
import BookTable from '../components/features/Books/BookTable';
import BorrowModal from '../components/features/Borrow/BorrowModal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoaderSpinner from '../components/features/Loader';

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const { data: res, isLoading, error } = useGetBooksQuery();
  const books = res?.data || [];

  const [deleteBookApi] = useDeleteBookMutation();
  const [borrowBookApi, { isLoading: isBorrowing }] = useBorrowBookMutation();
  const borrowedIds = useSelector(
    (state: RootState) => state.borrow.borrowedIds,
  );

  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (error) {
      toast.error('Error loading books.');
    }
  }, [error]);

  const handleDelete = async (id: string) => {
    try {
      await deleteBookApi(id).unwrap();
      toast.success('Book deleted successfully.');
    } catch (err) {
      console.error(err);
      toast.error('Failed to delete book.');
    }
  };

  const openModal = (book: Book) => {
    setSelectedBook(book);
    setQuantity(1);
    setShowModal(true);
  };

  const handleBorrowConfirm = async () => {
    if (!selectedBook) return;

    if (quantity > selectedBook.copies) {
      toast.warn(`Cannot borrow more than ${selectedBook.copies} copies.`);
      return;
    }

    try {
      await borrowBookApi({
        book: selectedBook._id,
        quantity,
        dueDate: new Date().toISOString(),
      }).unwrap();

      dispatch(borrowBook(selectedBook._id));
      toast.success(
        `Borrowed ${quantity} copy(ies) of "${selectedBook.title}".`,
      );
      setShowModal(false);
    } catch (err) {
      console.error(err);
      toast.error('Failed to borrow book.');
    }
  };

  if (isLoading) {
    return <LoaderSpinner />;
  }

  return (
    <div className='p-6 bg-white min-h-screen'>
      <ToastContainer position='top-right' autoClose={3000} />

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
        onDelete={handleDelete}
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
