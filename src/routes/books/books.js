import React from 'react';
import BookCard from '../../components/book-card/book-card';

export default function Books() {
  return (
    <main className="flex flex-col">
      <BookCard
        chapter="Chapter 17"
        percent={64}
        genre="Action"
        title="The Hunger Games"
        author="Suzanne Collins"
      />
      <BookCard
        chapter='Chapter 3: "A Lesson Learned "'
        percent={8}
        genre="Science Fiction"
        title="Dune"
        author="Frank Herbert"
      />
      <BookCard
        chapter="Introduction"
        percent={0}
        genre="Economy"
        title="Capital in the Twenty-First Century"
        author="Suzanne Collins"
      />
    </main>
  );
}
