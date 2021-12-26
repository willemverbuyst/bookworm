import { Book, BookApi } from '../models/Book';

export interface State {
  isLoggedIn: boolean;
  userName: string;
  booksApi: BookApi[] | null;
  allBooks: Book[] | null;
  appErrors: { loginForm: string };
}
