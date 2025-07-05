import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  title: string;
  author: string;
  genre: string;
  copies: string;
  description: string;
  isbn: string;
}

const initialState: FormState = {
  title: '',
  author: '',
  genre: 'FICTION',
  copies: '',
  description: '',
  isbn: '',
};

const formSlice = createSlice({
  name: 'bookForm',
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    setAuthor(state, action: PayloadAction<string>) {
      state.author = action.payload;
    },
    setGenre(state, action: PayloadAction<string>) {
      state.genre = action.payload;
    },
    setCopies(state, action: PayloadAction<string>) {
      state.copies = action.payload;
    },
    setDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    setIsbn(state, action: PayloadAction<string>) {
      state.isbn = action.payload;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const {
  setTitle,
  setAuthor,
  setGenre,
  setCopies,
  setDescription,
  setIsbn,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
