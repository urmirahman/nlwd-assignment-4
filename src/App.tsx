import { Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BorrowedBooks from './pages/BorrowedBook';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Navigate to='/books' replace />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/new' element={<AddBook />} />
        <Route path='/books/:id/edit' element={<EditBook />} />
        <Route path='/borrowed' element={<BorrowedBooks />} />
      </Routes>
    </div>
  );
}

export default App;
