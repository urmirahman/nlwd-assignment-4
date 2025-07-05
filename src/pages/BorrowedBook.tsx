import React from 'react';
import { useGetBorrowSummaryQuery } from '../_redux/api/booksApi';

const BorrowSummary: React.FC = () => {
  const { data: res, isLoading, error } = useGetBorrowSummaryQuery();
  const summary = res?.data || [];

  if (isLoading) {
    return <div className='p-4 text-center'>Loading borrow summary...</div>;
  }

  if (error) {
    return (
      <div className='p-4 text-center text-red-500'>
        Failed to load borrow summary.
      </div>
    );
  }

  return (
    <div className='p-6 bg-white'>
      <h2 className='text-2xl font-bold mb-4'>📚 Borrow Summary</h2>

      <table className='min-w-full border border-gray-300 rounded'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='text-left py-2 px-4 border-b'>Title</th>
            <th className='text-left py-2 px-4 border-b'>ISBN</th>
            <th className='text-left py-2 px-4 border-b'>Total Quantity</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((item) => (
            <tr key={item._id} className='border-b hover:bg-gray-50'>
              <td className='py-2 px-4'>{item.book.title}</td>
              <td className='py-2 px-4'>{item.book.isbn}</td>
              <td className='py-2 px-4 font-semibold text-center'>
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
