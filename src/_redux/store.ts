import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { booksApi } from './api/booksApi';
import { borrowSlice } from './slices/borrowSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    borrow: borrowSlice.reducer,
    bookForm: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
