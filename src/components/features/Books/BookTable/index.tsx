import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../../../../_redux/api/booksApi';
import TableSkeleton from '../../TableSkeleton';

interface BookTableProps {
  books: Book[];
  borrowedIds: string[];
  onEdit?: (id: string) => void;
  onDelete: (id: string) => void;
  onBorrow: (book: Book) => void;
  isLoading?: boolean;
}

const BookTable: React.FC<BookTableProps> = ({
  books,
  borrowedIds,
  onEdit,
  onDelete,
  onBorrow,
  isLoading = false,
}) => {
  if (isLoading) {
    return <TableSkeleton />;
  }

  if (books.length === 0) {
    return <div className='p-6 text-center text-gray-500'>No books found.</div>;
  }

  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200 bg-white rounded-lg shadow'>
        <thead className='bg-gray-100'>
          <tr>
            {['Title', 'Author', 'ISBN', 'Actions'].map((h) => (
              <th
                key={h}
                className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className='divide-y divide-gray-200'>
          {books.map((book) => (
            <tr
              key={book._id}
              className='odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition'
            >
              <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                {book.title}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                {book.author}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                {book.isbn || '—'}
              </td>
              <td className='px-6 py-4 whitespace-nowrap flex space-x-2'>
                <Link
                  to={`/books/${book._id}/edit`}
                  onClick={() => onEdit && onEdit(book._id)}
                  className='px-3 py-1 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300 text-sm font-medium'
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(book._id)}
                  className='px-3 py-1 bg-red-200 text-red-800 rounded hover:bg-red-300 text-sm font-medium'
                >
                  Delete
                </button>
                <button
                  onClick={() => onBorrow(book)}
                  disabled={borrowedIds.includes(book._id)}
                  className={`px-3 py-1 rounded text-sm font-medium ${
                    borrowedIds.includes(book._id)
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : 'bg-green-200 text-green-800 hover:bg-green-300'
                  }`}
                >
                  {borrowedIds.includes(book._id) ? 'Borrowed' : 'Borrow'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
