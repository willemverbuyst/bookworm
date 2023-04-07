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

export interface ApiState {
  response: {
    statusText?: string;
    message: string;
    status: "success" | "error" | undefined;
  };
}

export interface AuthState {
  isSignedIn: boolean;
  token: string;
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

export interface GenreState {
  genresApi: GenreApi | null;
  genresOverview: Array<Genre> | null;
}

export interface LanguageState {
  languagesApi: LanguageApi | null;
  languagesOverview: Array<Language> | null;
}

export interface RentalState {
  rentalsApi: RentalApi | null;
  rentalsOverview: Array<Rental> | null;
  rentalStatsDurationApi: RentalStatsDurationApi | null;
  rentalStatsDuration: Array<RentalStatsDuration> | null;
}

export interface ReviewState {
  reviewsApi: ReviewApi | null;
  reviewsOverview: Array<Review> | null;
}

export interface UserState {
  user: User | null;
}
