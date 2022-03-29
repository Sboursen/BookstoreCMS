import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore-cms/books/ADD';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE';
const book1 = {
  id: uuidv4(),
  chapter: 'Chapter 17',
  percent: 64,
  genre: 'Action',
  title: 'The Hunger Games',
  author: 'Suzanne Collins',
};
const book2 = {
  id: uuidv4(),
  chapter: 'Chapter 17',
  percent: 8,
  genre: 'Science Fiction',
  title: 'Dune',
  author: 'Frank Herbert',
};
const book3 = {
  id: uuidv4(),
  chapter: 'Introduction',
  percent: 0,
  genre: 'Economy',
  title: 'Capital in the Twenty-First Century',
  author: 'Suzanne Collins',
};

const defaultState = [book1, book2, book3];

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export default function bookReducer(
  state = defaultState,
  action,
) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [
        ...state.filter(
          (book) => Number(book.id) !== Number(action.id),
        ),
      ];
    default:
      return state;
  }
}
