const defaultState = [];
const ADD_BOOK = 'bookstore-cms/books/ADD';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE';

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
