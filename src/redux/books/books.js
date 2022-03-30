import BookstoreApi from '../../api/bookstore-api';

const GET_BOOKS_REQUEST = 'bookstore-cms/books/GET_REQUEST';
const GET_BOOKS_SUCCESS = 'bookstore-cms/books/GET_SUCCESS';
const GET_BOOKS_FAILURE = 'bookstore-cms/books/GET_FAILURE';

const ADD_BOOK_REQUEST = 'bookstore-cms/books/ADD_REQUEST';
const ADD_BOOK_SUCCESS = 'bookstore-cms/books/ADD_SUCCESS';
const ADD_BOOK_FAILURE = 'bookstore-cms/books/ADD_FAILURE';

// const DELETE_BOOK_REQUEST =
//   'bookstore-cms/books/DELETE_REQUEST';
// const DELETE_BOOK_SUCCESS =
//   'bookstore-cms/books/DELETE_SUCCESS';
// const DELETE_BOOK_FAILURE =
//   'bookstore-cms/books/DELETE_FAILURE';

const initialState = {
  loading: false,
  bookList: {},
  error: '',
};

// get book action creators
export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST,
  };
}

export function getBooksSuccess(bookList) {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: bookList,
  };
}

export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    payload: error,
  };
}

export function getBooks() {
  return (dispatch) => {
    dispatch(getBooksRequest());
    BookstoreApi.getBooks()
      .then((data) => {
        dispatch(getBooksSuccess(data));
      })
      .catch((error) => dispatch(getBooksFailure(error.message)));
  };
}

// add book action creators
export function addBookRequest() {
  return {
    type: ADD_BOOK_REQUEST,
  };
}

export function addBookSuccess(book) {
  return {
    type: GET_BOOKS_SUCCESS,
    payload: book,
  };
}

export function addBookFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    payload: error,
  };
}

export function addBook(book) {
  return (dispatch) => {
    dispatch(addBookRequest());
    const {
      itemId, title, author, category,
    } = book;
    BookstoreApi.addBook(itemId, title, author, category)
      .then(() => {
        const newBook = {};
        newBook[itemId] = [{ title, author, category }];
        dispatch(addBookSuccess(newBook));
      })
      .catch((error) => {
        dispatch(addBookFailure(error.message));
      });
  };
}

// book reducer

export default function bookReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    // get book
    case GET_BOOKS_REQUEST:
      return { ...state, loading: true };

    case GET_BOOKS_SUCCESS:
      return {
        loading: false,
        bookList: action.payload,
        error: '',
      };

    case GET_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    // add book
    case ADD_BOOK_REQUEST:
      return { ...state, loading: true };

    case ADD_BOOK_SUCCESS:
      return {
        loading: false,
        bookList: { ...state, ...action.payload },
        error: '',
      };

    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}

// export function addBook(book) {
//   return { type: ADD_BOOK, book };
// }

// export function removeBook(id) {
//   return { type: REMOVE_BOOK, id };
// }

// const ADD_BOOK = 'bookstore-cms/books/ADD';
// const REMOVE_BOOK = 'bookstore-cms/books/REMOVE';
// const LOAD_BOOKS = 'bookstore-cms/books/LOAD';
// const book1 = {
//   id: uuidv4(),
//   chapter: 'Chapter 17',
//   percent: 64,
//   genre: 'Action',
//   title: 'The Hunger Games',
//   author: 'Suzanne Collins',
// };
// const book2 = {
//   id: uuidv4(),
//   chapter: 'Chapter 17',
//   percent: 8,
//   genre: 'Science Fiction',
//   title: 'Dune',
//   author: 'Frank Herbert',
// };
// const book3 = {
//   id: uuidv4(),
//   chapter: 'Introduction',
//   percent: 0,
//   genre: 'Economy',
//   title: 'Capital in the Twenty-First Century',
//   author: 'Suzanne Collins',
// };

// const defaultState = [book1, book2, book3];

// export const loadBooks = () => {

// }

// export function addBook(book) {
//   return { type: ADD_BOOK, book };
// }

// export function removeBook(id) {
//   return { type: REMOVE_BOOK, id };
// }

// export default function bookReducer(
//   state = defaultState,
//   action,
// ) {
//   switch (action.type) {
//     case ADD_BOOK:
//       return [...state, action.book];

//     case REMOVE_BOOK:
//       return [
//         ...state.filter(
//           (book) => String(book.id) !== String(action.id),
//         ),
//       ];
//     default:
//       return state;
//   }
// }

// {
//   "item_id": "item2",
//   "category": "Science Fiction",
//   "title": "Dune",
//   "author": "Frank Herbert",
// };
// {
//   "item_id": "item3",
//   "category": "Economy",
//   "title": "Capital in the Twenty-First Century",
//   "author": "Suzanne Collins",
// };

// {
//   "item_id": "item1",
//   "category": "Action",
//   "title": "The Hunger Games",
//   "author": "Suzanne Collins",
// };
