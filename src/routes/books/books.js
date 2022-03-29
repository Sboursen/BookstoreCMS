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
        id={id}
        chapter={chapter}
        percent={percent}
        genre={genre}
        title={title}
        author={author}
      />
    );
  });

  if (!bookList.length) {
    return (
      <main className="flex flex-col mb-24 bg-[#fafafa]">
        <section className="book-card flex justify-center items-center rounded-sm p-12 mx-8 my-4 shadow-md h-48">
          <div className="text-3xl font-bold">
            Please add more books
          </div>
        </section>
        <Form />
      </main>
    );
  }
  return (
    <main className="flex flex-col mb-24 bg-[#fafafa]">
      {bookList}
      <Form />
    </main>
  );
}
