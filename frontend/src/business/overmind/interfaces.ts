import {
  Author,
  AuthorApi,
  AuthorStatsPageApi,
  AuthorStatsPagesPerAuthor,
} from "../models/Author";
import {
  Book,
  BookApi,
  BookStatsGenre,
  BookStatsGenreApi,
  BookStatsLanguage,
  BookStatsLanguageApi,
} from "../models/Book";
import { Genre, GenreApi } from "../models/Genre";
import { Language, LanguageApi } from "../models/Language";
import { User } from "../models/User";

export interface State {
  isSignedIn: boolean;
  user: User | null;
  token: string;
  apiResponse: { message: string; status: "success" | "error" | undefined };
  authorsApi: AuthorApi | null;
  authorOverview: Author[] | null;
  authorStatsPage: Array<AuthorStatsPagesPerAuthor> | null;
  authorStatsPageApi: AuthorStatsPageApi | null;
  booksApi: BookApi | null;
  bookOverview: Book[] | null;
  bookStatsGenre: Array<BookStatsGenre> | null;
  bookStatsGenreApi: BookStatsGenreApi | null;
  bookStatsLanguage: Array<BookStatsLanguage> | null;
  bookStatsLanguageApi: BookStatsLanguageApi | null;
  genresApi: GenreApi | null;
  genresOverview: Array<Genre> | null;
  languagesApi: LanguageApi | null;
  languagesOverview: Array<Language> | null;
  testProp: number;
}
