import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BorrowState {
  borrowedIds: string[];
}

const initialState: BorrowState = {
  borrowedIds: [],
};

export const borrowSlice = createSlice({
  name: 'borrow',
  initialState,
  reducers: {
    borrowBook(state, action: PayloadAction<string>) {
      state.borrowedIds.push(action.payload);
    },

    returnBook(state, action: PayloadAction<string>) {
      state.borrowedIds = state.borrowedIds.filter(
        (id) => id !== action.payload,
      );
    },
  },
});

export const { borrowBook, returnBook } = borrowSlice.actions;
