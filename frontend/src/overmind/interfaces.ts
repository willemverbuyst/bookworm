import { Book, BookApi } from '../models/Book';
import { User } from '../models/User';

export interface State {
  isLoggedIn: boolean;
  user: User | null;
  booksApi: BookApi | null;
  allBooks: Book[] | null;
  appErrors: { loginForm: string };
}
