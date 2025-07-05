import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../../../../_redux/api/booksApi';

interface BookTableProps {
  books: Book[];
  borrowedIds: string[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: Book) => void;
}

const BookTable: React.FC<BookTableProps> = ({
  books,
  borrowedIds,
  onEdit,
  onDelete,
  onBorrow,
}) => (
  <table className='min-w-full border border-gray-300'>
    <thead className='bg-gray-100'>
      <tr>
        <th className='text-left py-2 px-4 border-b'>Title</th>
        <th className='text-left py-2 px-4 border-b'>Author</th>
        <th className='text-left py-2 px-4 border-b'>ISBN</th>
        <th className='text-left py-2 px-4 border-b'>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map((book) => (
        <tr key={book._id} className='border-b hover:bg-gray-50'>
          <td className='py-2 px-4'>{book.title}</td>
          <td className='py-2 px-4'>{book.author}</td>
          <td className='py-2 px-4'>{book.isbn || '—'}</td>
          <td className='py-2 px-4'>
            <Link
              to={`/books/${book._id}/edit`}
              className='text-blue-600 hover:underline mr-4'
              onClick={() => onEdit(book._id)}
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(book._id)}
              className='text-red-600 hover:underline mr-4'
            >
              Delete
            </button>
            <button
              onClick={() => onBorrow(book)}
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
);

export default BookTable;
