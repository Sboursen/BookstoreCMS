import {
  applyMiddleware,
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
