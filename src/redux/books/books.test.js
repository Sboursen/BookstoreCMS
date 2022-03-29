import { createStore } from '@reduxjs/toolkit';
import bookReducer, { addBook, removeBook } from './books';

describe('bookReducer', () => {
  it('should return an array that contains 3 objects as initially', () => {
    const store = createStore(bookReducer);

    expect(store.getState()).toHaveLength(3);
  });

  it('should handle adding a single book', () => {
    const store = createStore(bookReducer);

    store.dispatch(addBook({ id: 1, title: 'books 1' }));

    expect(store.getState()[3]).toEqual(
      { id: 1, title: 'books 1' },
    );
  });

  it('should handle adding multiple books', () => {
    const store = createStore(bookReducer);

    store.dispatch(addBook({ id: 1, title: 'books 1' }));
    store.dispatch(addBook({ id: 2, title: 'books 2' }));
    store.dispatch(addBook({ id: 3, title: 'books 3' }));

    expect(store.getState().slice(3)).toEqual([
      { id: 1, title: 'books 1' },
      { id: 2, title: 'books 2' },
      { id: 3, title: 'books 3' },
    ]);
  });

  it('should handle removing a single book', () => {
    const store = createStore(bookReducer);

    store.dispatch(addBook({ id: 1, title: 'books 1' }));
    store.dispatch(addBook({ id: 2, title: 'books 2' }));
    store.dispatch(addBook({ id: 3, title: 'books 3' }));

    store.dispatch(removeBook(2));

    expect(store.getState().slice(3)).toEqual([
      { id: 1, title: 'books 1' },
      { id: 3, title: 'books 3' },
    ]);
  });

  it('should handle an alternative series of adding books and removing them', () => {
    const store = createStore(bookReducer);

    store.dispatch(addBook({ id: 1, title: 'books 1' }));
    store.dispatch(addBook({ id: 2, title: 'books 2' }));
    store.dispatch(removeBook(2));
    store.dispatch(addBook({ id: 3, title: 'books 3' }));
    store.dispatch(addBook({ id: 4, title: 'books 4' }));
    store.dispatch(addBook({ id: 5, title: 'books 5' }));
    store.dispatch(removeBook(4));

    expect(store.getState().slice(3)).toEqual([
      { id: 1, title: 'books 1' },
      { id: 3, title: 'books 3' },
      { id: 5, title: 'books 5' },
    ]);
  });
});
