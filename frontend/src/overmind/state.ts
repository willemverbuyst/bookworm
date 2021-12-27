import { derived } from 'overmind';
import { State } from './interfaces';

export const state: State = {
  isLoggedIn: false,
  user: null,
  booksApi: null,
  allBooks: derived((state: State) =>
    state.booksApi && state.booksApi.data
      ? [
          ...Object.values(state.booksApi.data).map((book) => ({
            ...book,
            read: book.read === 1 ? true : false,
          })),
        ].sort((book1, book2) => ('' + book1.title).localeCompare(book2.title))
      : null
  ),
  appErrors: { loginForm: '' },
};
