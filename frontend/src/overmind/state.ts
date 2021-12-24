import { derived } from 'overmind';
import { State } from './interfaces';

export const state: State = {
  isLoggedIn: false,
  booksApi: [],
  allBooks: derived((state: State) =>
    Object.values(state.booksApi).map((book) => ({
      ...book,
      read: book.read === 1 ? true : false,
    }))
  ),
};
