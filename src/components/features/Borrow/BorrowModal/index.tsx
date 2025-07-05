import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineX } from 'react-icons/hi';

interface BorrowModalProps {
  book: { _id: string; title: string; copies: number };
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
}) => {
  const handleConfirm = () => {
    if (quantity < 1) {
      toast.warn('Quantity must be at least 1.');
      return;
    }
    if (quantity > book.copies) {
      toast.warn(`Cannot borrow more than ${book.copies} copies.`);
      return;
    }
    onConfirm();
    toast.success(`Borrowed ${quantity} copy(ies) of "${book.title}".`);
  };

  const handleClose = () => {
    onClose();
    toast.info('Borrow cancelled.');
  };

  return (
    <>
      <ToastContainer position='top-right' autoClose={2000} />
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg shadow-xl w-full max-w-md mx-4'>
          <div className='flex justify-between items-center border-b px-6 py-4'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Borrow “{book.title}”
            </h3>
            <button
              onClick={handleClose}
              className='text-gray-500 hover:text-gray-700'
            >
              <HiOutlineX size={20} />
            </button>
          </div>

          <div className='px-6 py-4'>
            <p className='mb-2 text-gray-600'>
              Available copies:{' '}
              <span className='font-medium'>{book.copies}</span>
            </p>
            <label className='block text-gray-700 mb-1'>Quantity</label>
            <input
              type='number'
              min={1}
              max={book.copies}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div className='flex justify-end space-x-3 border-t px-6 py-4'>
            <button
              onClick={handleClose}
              className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition'
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={isBorrowing}
              className={`px-4 py-2 rounded text-white font-medium transition ${
                isBorrowing
                  ? 'bg-green-300 cursor-not-allowed'
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isBorrowing ? 'Processing...' : 'Confirm'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BorrowModal;
