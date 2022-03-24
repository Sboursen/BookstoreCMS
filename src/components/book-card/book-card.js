import React from 'react';
import PropTypes from 'prop-types';
import BookInfo from '../book-info/book-info';
import BookProgress from '../book-progress/book-progress';

export default function BookCard(props) {
  const {
    percent, chapter, genre, title, author,
  } = props;
  return (
    <section className="book-card flex justify-between rounded-sm p-12 mx-8 my-4 shadow-md">
      <BookInfo
        genre={genre}
        title={title}
        author={author}
      />
      <BookProgress percent={percent} chapter={chapter} />
    </section>
  );
}

BookCard.propTypes = {
  percent: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
