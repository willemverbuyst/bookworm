import { derived } from 'overmind';
import { State } from './interfaces';

export const state: State = {
  isLoggedIn: false,
  books: [],
  allBooks: derived((state: State) => Object.values(state.books)),
};
