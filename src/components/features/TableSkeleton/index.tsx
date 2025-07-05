import React from 'react';

const SKELETON_ROWS = 5;

const TableSkeleton: React.FC = () => (
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
        {Array.from({ length: SKELETON_ROWS }).map((_, idx) => (
          <tr key={idx} className='animate-pulse'>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <td key={i} className='px-6 py-4'>
                  <div className='h-4 bg-gray-200 rounded' />
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableSkeleton;
