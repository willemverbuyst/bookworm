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
  BookStatsYearPubishedApi,
  BookStatsYearPublished,
} from "./Book";
import { Bookworm, BookwormApi } from "./Bookworm";
import { Genre, GenreApi } from "./Genre";
import { Language, LanguageApi } from "./Language";
import {
  Rental,
  RentalApi,
  RentalStatsDuration,
  RentalStatsDurationApi,
} from "./Rental";
import { Review, ReviewApi } from "./Review";
import { User, UserApi } from "./User";

export interface State {
  auth: Auth;
  apiResponse: ApiResponse;
  author: AuthorState;
  book: BookState;
  bookworm: BookwormState;
  genresApi: GenreApi | null;
  genresOverview: Array<Genre> | null;
  languagesApi: LanguageApi | null;
  languagesOverview: Array<Language> | null;
  rentalsApi: RentalApi | null;
  rentalsOverview: Array<Rental> | null;
  rentalStatsDurationApi: RentalStatsDurationApi | null;
  rentalStatsDuration: Array<RentalStatsDuration> | null;
  reviewsApi: ReviewApi | null;
  reviewsOverview: Array<Review> | null;
  user: User | null;
}

export interface AuthorState {
  authorsApi: AuthorApi | null;
  authorOverview: Author[] | null;
  authorStatsPage: AuthorStatsPage | null;
  authorStatsPageApi: AuthorStatsPageApi | null;
}

export interface BookState {
  booksApi: BookApi | null;
  bookOverview: Array<Book> | null;
  bookStatsGenre: Array<BookStatsGenre> | null;
  bookStatsGenreApi: BookStatsGenreApi | null;
  bookStatsLanguage: Array<BookStatsLanguage> | null;
  bookStatsLanguageApi: BookStatsLanguageApi | null;
  bookStatsYearPublished: Array<BookStatsYearPublished> | null;
  bookStatsYearPublishedApi: BookStatsYearPubishedApi | null;
}

export interface BookwormState {
  bookwormApi: BookwormApi | null;
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  bookwormOverview: Array<Bookworm> | null;
}
