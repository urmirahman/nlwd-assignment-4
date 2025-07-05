import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BorrowState {
  borrowedIds: number[];
}

const initialState: BorrowState = {
  borrowedIds: [],
};

export const borrowSlice = createSlice({
  name: 'borrow',
  initialState,
  reducers: {
    borrowBook(state, action: PayloadAction<number>) {
      state.borrowedIds.push(action.payload);
    },

    returnBook(state, action: PayloadAction<number>) {
      state.borrowedIds = state.borrowedIds.filter(
        (id) => id !== action.payload,
      );
    },
  },
});

export const { borrowBook, returnBook } = borrowSlice.actions;
