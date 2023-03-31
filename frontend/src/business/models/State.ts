import { ApiResponse } from "./Api";
import { Auth } from "./Auth";
import {
  Author,
  AuthorApi,
  AuthorStatsPage,
  AuthorStatsPageApi,
} from "./Author";
import {
  Book,
  BookApi,
  BookStatsGenre,
  BookStatsGenreApi,
  BookStatsLanguage,
  BookStatsLanguageApi,
} from "./Book";
import { Bookworm, BookwormApi } from "./Bookworm";
import { Genre, GenreApi } from "./Genre";
import { Language, LanguageApi } from "./Language";
import { User, UserApi } from "./User";

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
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  bookwormOverview: Array<Bookworm> | null;
  genresApi: GenreApi | null;
  genresOverview: Array<Genre> | null;
  languagesApi: LanguageApi | null;
  languagesOverview: Array<Language> | null;
  user: User | null;
}