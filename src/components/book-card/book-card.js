import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from '../book-info/book-info';
import BookProgress from '../book-progress/book-progress';

export default function BookCard(props) {
  const {
    id, percent, chapter, genre, title, author,
  } = props;
  return (
    <section className="flex flex-col gap-12 items-center bg-white w-fit m-auto md:w-full  md:flex-row justify-between rounded-sm px-7 py-8 shadow-md">
      <BookInfo
        id={id}
        genre={genre}
        title={title}
        author={author}
      />
      <BookProgress percent={percent} chapter={chapter} />
    </section>
  );
}

BookCard.propTypes = {
  id: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
