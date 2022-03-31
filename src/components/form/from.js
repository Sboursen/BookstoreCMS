import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../button/button';
import { addBook } from '../../redux/books/books';

const isValid = (state) => state && state !== 'Category';

export default function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [valid, setValid] = useState([true, true, true]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.id === 'book-title') {
      setBookTitle(e.target.value);
    } else if (e.target.id === 'book-author') {
      setBookAuthor(e.target.value);
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !isValid(category)
      || !isValid(bookTitle)
      || !isValid(bookAuthor)
    ) {
      const validity = [];
      [
        [bookTitle, setBookTitle],
        [bookAuthor, setBookAuthor],
        [category, setCategory],
      ].forEach((e) => {
        if (!isValid(e[0])) {
          e[1]('');
          validity.push(false);
        } else {
          validity.push(true);
        }
      });
      setValid(validity);
    } else {
      const newBook = {
        itemId: uuidv4(),
        category: `${category}`,
        title: `${bookTitle}`,
        author: `${bookAuthor}`,
      };

      dispatch(addBook(newBook));
      setBookTitle('');
      setBookAuthor('');
      setCategory('');
    }
    setTimeout(() => {
      setValid([true, true, true]);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="submit"
      className="flex mt-10 flex-col gap-7 justify-between py-7 border-t-2 border-t-grey-border"
    >
      <h2 className="text-xl font-bold text-warm-grey ">
        ADD NEW BOOK
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-base">
        <label
          htmlFor="title"
          className="h-12 w-full lg:w-1/5"
        >
          <input
            className={`h-full w-full shadow-inner border-grey-border placeholder:text-pinkish-grey px-4 py-3 border-2 rounded${
              valid[0] ? '' : 'border-2 border-red-500'
            }`}
            type="text"
            name="title"
            id="book-title"
            value={bookTitle}
            placeholder="Book title"
            onChange={handleChange}
            onBlur={handleChange}
          />
        </label>
        <label
          htmlFor="author"
          className="h-12 w-full lg:w-1/5"
        >
          <input
            className={`h-full w-full shadow-inner border-grey-border placeholder:text-pinkish-grey px-4 py-3 border-2 rounded${
              valid[1] ? '' : 'border-2 border-red-500'
            }`}
            type="text"
            name="author"
            id="book-author"
            value={bookAuthor}
            placeholder="Book author"
            onChange={handleChange}
            onBlur={handleChange}
          />
        </label>
        <label
          htmlFor="category"
          className="h-12 w-full lg:w-1/5"
        >
          <select
            name="category"
            id="category"
            className={`h-full w-full px-4 bg-white text-pinkish-grey border-gray-50 shadow-inner rounded  ${
              valid[2] ? '' : 'border-2 border-red-500'
            }`}
            value={category}
            onChange={handleCategory}
            onBlur={handleCategory}
            placeholder="Book title"
          >
            <option disabled value="">
              Category
            </option>
            <option
              className=" text-black-two"
              value="action"
            >
              Action
            </option>

            <option
              className=" text-black-two"
              value="sci-fi"
            >
              Sci-fi
            </option>
            <option
              className=" text-black-two"
              value="romance"
            >
              Romance
            </option>
            <option
              className=" text-black-two"
              value="adventure"
            >
              Adventure
            </option>
            <option
              className=" text-black-two"
              value="history"
            >
              History
            </option>
            <option
              className=" text-black-two"
              value="philosophy"
            >
              Philosophy
            </option>
          </select>
        </label>
        <Button
          type="submit"
          text="ADD BOOK"
          twClasses="px-12 py-3 text-base font-bold"
        />
      </div>
    </form>
  );
}
