import { derived } from 'overmind';
import { State } from './interfaces';

export const state: State = {
  isLoggedIn: false,
  userName: '',
  booksApi: null,
  allBooks: derived((state: State) =>
    state.booksApi
      ? Object.values(state.booksApi).map((book) => ({
          ...book,
          read: book.read === 1 ? true : false,
        }))
      : null
  ),
  appErrors: { loginForm: '' },
};
