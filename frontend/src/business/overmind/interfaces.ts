import { ApiResponse } from "../models/Api";
import { Auth } from "../models/Auth";
import {
  Author,
  AuthorApi,
  AuthorStatsPage,
  AuthorStatsPageApi,
} from "../models/Author";
import {
  Book,
  BookApi,
  BookStatsGenre,
  BookStatsGenreApi,
  BookStatsLanguage,
  BookStatsLanguageApi,
} from "../models/Book";
import { Bookworm, BookwormApi } from "../models/Bookworm";
import { Genre, GenreApi } from "../models/Genre";
import { Language, LanguageApi } from "../models/Language";
import { User } from "../models/User";

export interface State {
  auth: Auth;
  apiResponse: ApiResponse;
  authorsApi: AuthorApi | null;
  authorOverview: Author[] | null;
  authorStatsPage: AuthorStatsPage | null;
  authorStatsPageApi: AuthorStatsPageApi | null;
  booksApi: BookApi | null;
  bookOverview: Array<Book> | null;
  bookStatsGenre: Array<BookStatsGenre> | null;
  bookStatsGenreApi: BookStatsGenreApi | null;
  bookStatsLanguage: Array<BookStatsLanguage> | null;
  bookStatsLanguageApi: BookStatsLanguageApi | null;
  bookwormApi: BookwormApi | null;
  bookwormOverview: Array<Bookworm> | null;
  genresApi: GenreApi | null;
  genresOverview: Array<Genre> | null;
  languagesApi: LanguageApi | null;
  languagesOverview: Array<Language> | null;
  user: User | null;
}
