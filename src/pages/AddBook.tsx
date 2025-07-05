// import React, { useState, type FormEvent } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAddBookMutation } from '../_redux/api/booksApi';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const GENRES = [
//   'FICTION',
//   'NON_FICTION',
//   'SCIENCE',
//   'HISTORY',
//   'BIOGRAPHY',
//   'FANTASY',
// ] as const;

// const AddBook: React.FC = () => {
//   const navigate = useNavigate();
//   const [addBook, { isLoading }] = useAddBookMutation();

//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [genre, setGenre] = useState<(typeof GENRES)[number]>(GENRES[0]);
//   const [copies, setCopies] = useState('');
//   const [description, setDescription] = useState('');
//   const [isbn, setIsbn] = useState('');

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!title || !author || !genre || !copies) {
//       toast.warn('Please fill in all required fields.');
//       return;
//     }

//     try {
//       await addBook({
//         title,
//         author,
//         genre,
//         copies: Number(copies),
//         description: description || undefined,
//         isbn: isbn ? Number(isbn) : undefined,
//       }).unwrap();

//       toast.success('Book added successfully!');
//       setTimeout(() => {
//         navigate('/books');
//       }, 1000);
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to save the book.');
//     }
//   };

//   return (
//     <div className='max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg'>
//       <ToastContainer
//         position='top-right'
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover
//         draggable
//         theme='colored'
//       />

//       <h2 className='text-3xl font-extrabold text-gray-800 mb-6 text-center'>
//         Add New Book
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'
//       >
//         <div>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             Title <span className='text-red-500'>*</span>
//           </label>
//           <input
//             type='text'
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder='e.g. The Great Adventure'
//             required
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           />
//         </div>

//         <div>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             Author <span className='text-red-500'>*</span>
//           </label>
//           <input
//             type='text'
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             placeholder='e.g. Jane Doe'
//             required
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           />
//         </div>

//         <div>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             Genre <span className='text-red-500'>*</span>
//           </label>
//           <select
//             value={genre}
//             onChange={(e) =>
//               setGenre(e.target.value as (typeof GENRES)[number])
//             }
//             required
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           >
//             {GENRES.map((g) => (
//               <option key={g} value={g}>
//                 {g.replace('_', ' ')}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             Copies <span className='text-red-500'>*</span>
//           </label>
//           <input
//             type='number'
//             min={1}
//             value={copies}
//             onChange={(e) => setCopies(e.target.value)}
//             placeholder='1'
//             required
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           />
//         </div>

//         <div className='md:col-span-2'>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             Description (optional)
//           </label>
//           <textarea
//             rows={3}
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder='A brief summary of the book'
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           />
//         </div>

//         <div className='md:col-span-2'>
//           <label className='block text-sm font-medium text-gray-700 mb-1'>
//             ISBN <span className='text-red-500'>*</span>
//           </label>
//           <input
//             type='number'
//             value={isbn}
//             onChange={(e) => setIsbn(e.target.value)}
//             placeholder='9780553380163'
//             className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
//                        focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
//           />
//         </div>

//         <div className='md:col-span-2 flex justify-center mt-4'>
//           <button
//             type='submit'
//             disabled={isLoading}
//             className='relative inline-flex items-center justify-center px-6 py-3 bg-blue-600
//                        hover:bg-blue-700 text-white font-semibold rounded-md disabled:opacity-50
//                        disabled:cursor-not-allowed transition'
//           >
//             {isLoading && (
//               <span className='animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full' />
//             )}
//             {isLoading ? 'Saving...' : 'Save Book'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

import React, { type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useAddBookMutation } from '../_redux/api/booksApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  setTitle,
  setAuthor,
  setGenre,
  setCopies,
  setDescription,
  setIsbn,
  resetForm,
} from '../_redux/slices/formSlice';
import { type RootState, type AppDispatch } from '../_redux/store';

const GENRES = [
  'FICTION',
  'NON_FICTION',
  'SCIENCE',
  'HISTORY',
  'BIOGRAPHY',
  'FANTASY',
] as const;

const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [addBook, { isLoading }] = useAddBookMutation();

  // pull form values from Redux
  const { title, author, genre, copies, description, isbn } = useSelector(
    (state: RootState) => state.bookForm,
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !author || !genre || !copies) {
      toast.warn('Please fill in all required fields.');
      return;
    }

    try {
      await addBook({
        title,
        author,
        genre,
        copies: Number(copies),
        description: description || undefined,
        isbn: isbn ? Number(isbn) : undefined,
      }).unwrap();

      toast.success('Book added successfully!');
      dispatch(resetForm());
      setTimeout(() => navigate('/books'), 1000);
    } catch {
      toast.error('Failed to save the book.');
    }
  };

  return (
    <div className='max-w-xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg'>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme='colored'
      />

      <h2 className='text-3xl font-extrabold text-gray-800 mb-6 text-center'>
        Add New Book
      </h2>

      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5'
      >
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Title <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            placeholder='e.g. The Great Adventure'
            required
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Author <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            value={author}
            onChange={(e) => dispatch(setAuthor(e.target.value))}
            placeholder='e.g. Jane Doe'
            required
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Genre <span className='text-red-500'>*</span>
          </label>
          <select
            value={genre}
            onChange={(e) => dispatch(setGenre(e.target.value))}
            required
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          >
            {GENRES.map((g) => (
              <option key={g} value={g}>
                {g.replace('_', ' ')}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Copies <span className='text-red-500'>*</span>
          </label>
          <input
            type='number'
            min={1}
            value={copies}
            onChange={(e) => dispatch(setCopies(e.target.value))}
            placeholder='1'
            required
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          />
        </div>

        <div className='md:col-span-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Description (optional)
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
            placeholder='A brief summary of the book'
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          />
        </div>

        <div className='md:col-span-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            ISBN (optional)
          </label>
          <input
            type='number'
            value={isbn}
            onChange={(e) => dispatch(setIsbn(e.target.value))}
            placeholder='9780553380163'
            className='w-full px-4 py-2 border border-gray-300 bg-white rounded-md
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition'
          />
        </div>

        <div className='md:col-span-2 flex justify-center mt-4'>
          <button
            type='submit'
            disabled={isLoading}
            className='relative inline-flex items-center justify-center px-6 py-3 bg-blue-600
                       hover:bg-blue-700 text-white font-semibold rounded-md disabled:opacity-50
                       disabled:cursor-not-allowed transition'
          >
            {isLoading && (
              <span className='animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full' />
            )}
            {isLoading ? 'Saving...' : 'Save Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
