import { Book } from '../models/Book';

export interface State {
  isLoggedIn: boolean;
  books: Book[];
  allBooks: Book[];
}
