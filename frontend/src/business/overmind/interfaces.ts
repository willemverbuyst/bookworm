import { Author, AuthorApi } from "../models/Author";
import { Book, BookApi } from "../models/Book";
import { Genre, GenreApi } from "../models/Genre";
import { Language, LanguageApi } from "../models/Language";
import { User } from "../models/User";

export interface State {
  isSignedIn: boolean;
  user: User | null;
  token: string;
  allAuthors: Author[] | null;
  authorForStatistics: { name: string; books_written: number }[] | null;
  allBooks: Book[] | null;
  booksGroupedByLanguage: { language: string; number: number }[] | null;
  apiResponse: { message: string; status: "success" | "error" | undefined };
  authorsApi: AuthorApi;
  booksApi: BookApi;
  genresApi: GenreApi;
  languagesApi: LanguageApi;
  allGenres: Array<Genre> | null;
  allLanguages: Array<Language> | null;
  testProp: number;
}
