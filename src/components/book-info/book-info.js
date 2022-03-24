import React from 'react';
import PropTypes from 'prop-types';

export default function BookInfo(props) {
  const { genre, title, author } = props;
  return (
    <div className="flex flex-col gap-6 justify-between items-start w-72 ">
      <div className="flex flex-col gap-0">
        <span className="font-bold text-sm text-gray-500">
          {genre}
        </span>
        <h3 className=" text-2xl font-bold">{title}</h3>
        <span className=" text-lg font-light text-sky-600">
          {author}
        </span>
      </div>
      <div className="flex gap-2 justify-center items-center text-gray-300">
        <span className="text-sky-600">Comments</span>|
        <span className="text-sky-600">Remove</span>|
        <span className="text-sky-600">Edit</span>
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
