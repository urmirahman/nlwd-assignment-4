import React from 'react';

interface BorrowModalProps {
  book: any;
  quantity: number;
  isBorrowing: boolean;
  setQuantity: (val: number) => void;
  onConfirm: () => void;
  onClose: () => void;
}

const BorrowModal: React.FC<BorrowModalProps> = ({
  book,
  quantity,
  isBorrowing,
  setQuantity,
  onConfirm,
  onClose,
}) => (
  <div className='fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50'>
    <div className='bg-white rounded shadow-lg p-6 w-full max-w-sm'>
      <h3 className='text-xl font-semibold mb-4'>Borrow: {book.title}</h3>

      <label className='block mb-2'>
        Quantity (max {book.copies}):
        <input
          type='number'
          min={1}
          max={book.copies}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className='w-full mt-1 px-3 py-2 border rounded'
        />
      </label>

      {quantity > book.copies && (
        <p className='text-red-500 text-sm mb-2'>
          Quantity exceeds available copies.
        </p>
      )}

      <div className='flex justify-end gap-4 mt-6'>
        <button
          onClick={onClose}
          className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={quantity > book.copies || isBorrowing}
          className='px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50'
        >
          {isBorrowing ? 'Processing...' : 'Confirm Borrow'}
        </button>
      </div>
    </div>
  </div>
);

export default BorrowModal;
