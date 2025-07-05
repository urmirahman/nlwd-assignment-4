import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  copies: number;
  description?: string;
  isbn?: number;
}

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query<{ data: Book[] }, void>({
      query: () => '/books',
      providesTags: ['Books'],
    }),

    getBook: builder.query<{ data: Book }, string>({
      query: (id) => `/books/${id}`,
      providesTags: ['Books'],
    }),

    addBook: builder.mutation<Book, Partial<Book>>({
      query: (newBook) => ({
        url: '/books/create',
        method: 'POST',
        body: newBook,
      }),
      invalidatesTags: ['Books'],
    }),

    updateBook: builder.mutation<Book, { id: string; data: Partial<Book> }>({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Books'],
    }),

    deleteBook: builder.mutation<void, string>({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: ['Books'],
    }),
    borrowBook: builder.mutation<
      { success: boolean; message: string },
      { book: string; quantity: number; dueDate: string }
    >({
      query: ({ book, quantity, dueDate }) => ({
        url: `/borrow/book`,
        method: 'POST',
        body: { book, quantity, dueDate },
      }),
      invalidatesTags: ['Books'],
    }),
    getBorrowSummary: builder.query<
      {
        success: boolean;
        message: string;
        data: {
          _id: string;
          totalQuantity: number;
          book: {
            title: string;
            isbn: string;
          };
        }[];
      },
      void
    >({
      query: () => '/borrow',
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useGetBorrowSummaryQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useBorrowBookMutation,
} = booksApi;
