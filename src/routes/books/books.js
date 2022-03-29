import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../../components/book-card/book-card';
import Form from '../../components/form/from';

export default function Books() {
  const books = useSelector((store) => store.books);

  const bookList = books.map((book) => {
    const {
      id, chapter, percent, genre, title, author,
    } = book;

    return (
      <BookCard
        key={id}
        chapter={chapter}
        percent={percent}
        genre={genre}
        title={title}
        author={author}
      />
    );
  });

  return (
    <main className="flex flex-col mb-24 bg-[#fafafa]">
      {bookList}
      <Form />
    </main>
  );
}
