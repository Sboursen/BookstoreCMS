import React from 'react';
import Button from '../button/button';

export default function Form() {
  return (
    <form
      action="submit"
      className="flex mt-6 flex-col gap-6 justify-between rounded-sm p-12 mx-8 my-4 shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-500 ">
        ADD NEW BOOK
      </h2>
      <div className="flex flex-row justify-between items-center text-gray-400">
        <label htmlFor="title" className="h-8 w-1/2">
          <input
            className="h-full w-full shadow-inner px-6 border-2 rounded"
            type="text"
            name="title"
            id="book-title"
            placeholder="Book title"
            required
          />
        </label>
        <label htmlFor="category" className="h-8 w-1/4">
          <select
            name="category"
            id="category"
            className="h-full w-full text-center shadow-inner rounded"
          >
            <option value="" disabled selected>
              Category
            </option>
            <option value="action">Action</option>
            <option value="scifi">Sci-fi</option>
            <option value="romance">Romance</option>
            <option value="adventure">Adventure</option>
            <option value="history">History</option>
            <option value="philosophy">Philosophy</option>
          </select>
        </label>
        <Button
          text="ADD BOOK"
          twClasses="px-12 py-1 text-xl font-bold"
        />
      </div>
    </form>
  );
}
