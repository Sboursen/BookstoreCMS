import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

export default function Header() {
  return (
    <header className="flex justify-between p-6 md:px-24 w-full shadow-md min-h-24">
      <nav className="flex gap-10 flex-col md:flex-row">
        <Link to="/">
          <h1 className="h-full flex  items-center text-3xl font-bold text-azure mr-2">
            Bookstore CMS
          </h1>
        </Link>
        <Link to="/">
          <span className="h-full flex items-center text-black-two text-sm">
            BOOKS
          </span>
        </Link>
        <Link to="/categories">
          <span className="h-full flex items-center text-black-two text-sm opacity-50">
            CATEGORIES
          </span>
        </Link>
      </nav>
      <button
        type="button"
        className="h-11 w-11 text-3xl flex items-center p-2 text-azure rounded-full border-2 border-grey-border"
      >
        <ImUser />
      </button>
    </header>
  );
}
