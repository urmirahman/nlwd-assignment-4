import React from 'react';
import { useGetBorrowSummaryQuery } from '../_redux/api/booksApi';

const BorrowSummary: React.FC = () => {
  const { data: res, isLoading, error } = useGetBorrowSummaryQuery();
  const summary = res?.data || [];

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-12'>
        <div
          className='w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin'
          aria-label='Loading…'
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className='p-6 text-center text-red-600'>
        Failed to load borrow summary.
      </div>
    );
  }

  if (summary.length === 0) {
    return (
      <div className='p-6 text-center text-gray-500'>
        No borrow history available.
      </div>
    );
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-md overflow-x-auto'>
      <h2 className='text-2xl font-bold mb-4'>📊 Borrow Summary</h2>

      <table className='min-w-full divide-y divide-gray-200'>
        <thead className='bg-gray-100'>
          <tr>
            {['Title', 'ISBN', 'Total Quantity'].map((h) => (
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
          {summary.map((item) => (
            <tr
              key={item._id}
              className='odd:bg-white even:bg-gray-50 hover:bg-gray-100 transition'
            >
              <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                {item.book.title}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-gray-800'>
                {item.book.isbn}
              </td>
              <td className='px-6 py-4 whitespace-nowrap text-center font-semibold text-gray-900'>
                {item.totalQuantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BorrowSummary;
