import { Routes, Route, Navigate } from 'react-router-dom';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BorrowedBooks from './pages/BorrowedBook';
import Navbar from './components/features/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/features/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/new' element={<AddBook />} />
        <Route path='/books/:id/edit' element={<EditBook />} />
        <Route path='/borrowed' element={<BorrowedBooks />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
