import { AlertColor } from "@mui/material";
import { Author, AuthorApi } from "../models/Author";
import { Book, BookApi } from "../models/Book";
import { User } from "../models/User";

export interface State {
  isLoggedIn: boolean;
  user: User | null;
  token: string;
  allAuthors: Author[] | null;
  authorForStatistics: { name: string; books_written: number }[];
  allBooks: Book[] | null;
  booksGroupedByLanguage: { language: string; number: number }[] | null;
  apiResponse: { message: string; status: AlertColor | undefined };
  allData: {
    authorsApi: AuthorApi;
    booksApi: BookApi;
  };
  testProp: number;
}
