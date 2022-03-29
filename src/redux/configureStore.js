import {
  combineReducers,
  createStore,
} from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  books: bookReducer,
  categories: categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
