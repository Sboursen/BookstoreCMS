import { Routes, Route } from 'react-router-dom';
import Books from './routes/books/books';
import Categories from './routes/categories/categories';
import NoMatch from './routes/no-match/no-match';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
