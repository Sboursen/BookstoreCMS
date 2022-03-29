import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Button from '../button/button';
import { addBook } from '../../redux/books/books';

const isValid = (state) => state && state !== 'Category';

export default function Form() {
  const [bookTitle, setBookTitle] = useState('');
  const [selected, setSelected] = useState('');
  const [valid, setValid] = useState([true, true]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid(selected) && !isValid(bookTitle)) {
      setBookTitle('');
      setSelected('');
      setValid([false, false]);
      console.log('both');
    } else if (!isValid(bookTitle)) {
      setBookTitle('');
      setValid([false, true]);
      console.log('title');
    } else if (!isValid(selected)) {
      setSelected('');
      setValid([true, false]);
      console.log('selected');
    } else {
      const newBook = {
        id: uuidv4(),
        chapter: 'Chapter 0',
        percent: 0,
        genre: `${selected}`,
        title: `${bookTitle}`,
        author: 'Suzanne Collins',
      };

      dispatch(addBook(newBook));
    }
    setTimeout(() => {
      setValid([true, true]);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action="submit"
      className="flex mt-6 flex-col gap-6 justify-between rounded-sm p-12 mx-8 my-4 shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-500 ">
        ADD NEW BOOK
      </h2>
      <div className="flex flex-row justify-between items-center">
        <label htmlFor="title" className="h-8 w-1/2">
          <input
            className={`h-full w-full shadow-inner px-6 border-2 rounded${
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
        <label htmlFor="category" className="h-8 w-1/4">
          <select
            name="category"
            id="category"
            className={`h-full w-full text-center shadow-inner rounded  ${
              valid[1] ? '' : 'border-2 border-red-500'
            }`}
            value={selected}
            onChange={handleSelected}
            onBlur={handleSelected}
            placeholder="Book title"
          >
            <option disabled value="">
              Category
            </option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="romance">Romance</option>
            <option value="adventure">Adventure</option>
            <option value="history">History</option>
            <option value="philosophy">Philosophy</option>
          </select>
        </label>
        <Button
          type="submit"
          text="ADD BOOK"
          twClasses="px-12 py-1 text-xl font-bold"
        />
      </div>
    </form>
  );
}
