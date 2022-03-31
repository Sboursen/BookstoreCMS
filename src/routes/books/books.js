import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../redux/books/books';
import BookCard from '../../components/book-card/book-card';
import Form from '../../components/form/from';

export default function Books() {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const bookList = Object.keys(books.bookList).map((id) => {
    const maxChapter = 48;
    const book = books.bookList[id];
    const { category: genre, title, author } = book[0];
    const randomProgress = Math.random();
    const currentChapter = maxChapter * randomProgress;
    return (
      <BookCard
        key={id}
        id={id}
        chapter={`Chapter ${Math.floor(currentChapter)}`}
        percent={Math.floor(100 * randomProgress)}
        genre={genre}
        title={title}
        author={author}
      />
    );
  });

  if (!bookList.length) {
    return (
      <main className="flex flex-col pb-64 pt-12 px-6 md:px-24 gap-10 bg-dirty-white">
        <section className="book-card flex justify-center items-center rounded-sm p-12 shadow-md h-48">
          <div className="text-3xl font-bold">
            Please add more books
          </div>
        </section>
        <Form />
      </main>
    );
  }
  return (
    <main className="flex flex-col pb-64 pt-12 px-6 md:px-24 gap-4 bg-dirty-white">
      {bookList}
      <Form />
    </main>
  );
}
