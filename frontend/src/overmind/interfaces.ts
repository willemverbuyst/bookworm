import { Book, BookApi } from '../models/Book';

export interface State {
  isLoggedIn: boolean;
  booksApi: BookApi[];
  allBooks: Book[];
}
