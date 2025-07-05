# Library System

A full-featured library management web app built with React, Redux Toolkit (RTK Query), React Router, Tailwind CSS, and Vite. Browse books, add new titles, borrow copies, and view borrow summaries—all with modern UI components and toast notifications.

---

## 🚀 Features

- Landing page with hero banner, featured books, genres, top titles, authors, and newsletter signup
- Browse all books in a responsive data table
- Add, edit, and delete books with form validation
- Borrow books via modal dialog with quantity limits
- View borrow summary (total quantities per title)
- Global loading spinners and skeleton placeholders
- Toast notifications for success, error, and warning messages
- Environment-based API URL configuration via Vite

---

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite for fast development
- Redux Toolkit + RTK Query for state and data fetching
- React Router v6 for client-side routing
- Tailwind CSS for utility-first styling
- React-Toastify for toast notifications
- React Icons for illustrative icons

---

## 📋 Prerequisites

- Node.js ≥ 16
- npm or yarn

---

## 💾 Installation

```bash
# Clone the repo
git clone https://github.com/urmirahman/nlwd-assignment-4.git
cd nlwd-assignment-4
# Install dependencies
npm install
# or
yarn install
```

---

## 🔧 Environment Variables

Create a `.env` (or `.env.local`) file in the root:

```bash
VITE_BASE_URL="http://localhost:8000/api"
```

> **Note**: Vite only exposes variables prefixed with `VITE_`.  
> Restart the dev server after editing `.env` files.

---

## 🚥 Available Scripts

```bash
# Start dev server (http://localhost:5173)
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
src/
           # RTK Query endpoints
 ├─ components/
 │
 │   └─ features/
         ├─ Footer.tsx
 │       ├─ Navbar.tsx
 │       ├─ Borrow/
 │       │   ├─ BorrowModal.tsx
 │       │   └─ BorrowSummary.tsx
 │       └─ Books/
 │           ├─ BookTable.tsx
 │           └─ TableSkeleton.tsx
 ├─ pages/
 │   ├─ LandingPage.tsx
 │   ├─ BookList.tsx
 │   └─ AddBook.tsx
     ...
 ├─ _redux/
 │   ├─ api/
 │   │   └─ booksApi.ts
 │   ├─ slices/
 │   │   ├─ borrowSlice.ts
 │   │   └─ formSlice.ts
 │   └─ store.ts
 ├─ App.tsx
 └─ main.tsx
```

---

## 📄 Pages

- **LandingPage** (`/`)  
  Hero banner, featured books, genre grid, top titles, noted authors, newsletter form.

- **BookList** (`/books`)  
  Table of all books, actions to edit, delete, or borrow.

- **AddBook** (`/books/new`)  
  Two-column form with inputs for title, author, genre dropdown, copies, description, ISBN.

- **EditBook** (`/books/:id/edit`) _(you can scaffold this similar to AddBook)_

- **BorrowSummary** (`/borrowed`)  
  Table summarizing total borrowed quantity per title.

---

## ⚙️ Components

- **Navbar**  
  Responsive header with links to Books, Add Book, Borrow History.

- **Footer**  
  Site credit, tech stack mention, image attribution.

- **BookTable**  
  Stylized books table with zebra rows, action buttons, and built-in loading/skeleton.

- **BorrowModal**  
  Modal dialog for borrowing books, input validation, toast feedback.

- **TableSkeleton**, **LoaderSpinner**  
  Animated placeholders and spinners for loading states.

- **Landing Sections**  
  `HeroBanner`, `DiscoverSection`, `GenreSection`, `TopBooksSection`, `AuthorsSection`, `NewsletterSection`.

---

## 🔗 API (RTK Query)

Located in `src/_redux/api/booksApi.ts`, includes:

- `getBooks`, `getBook`
- `addBook`, `updateBook`, `deleteBook`
- `borrowBook`, `getBorrowSummary`

Queries/mutations automatically manage cache and tags.

---

## 🛠 Redux Slices

- **borrowSlice**  
  Tracks list of borrowed book IDs to disable repeat borrows.

- **formSlice**  
  (Optional) Centralizes add/edit book form state in Redux.

---

## 🎨 Styling

- Tailwind CSS configured via `tailwind.config.js`.
- Utility classes for responsive layouts, gradients, shadows, and animations.
- Arbitrary value support for custom heights, colors, and backgrounds.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -m "feat: add bar"`)
4. Push to branch (`git push origin feature/foo`)
5. Open a Pull Request

---

## 📜 License

MIT © Your Name  
Feel free to customize or extend!
