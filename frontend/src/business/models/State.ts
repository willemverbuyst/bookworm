import { ApiResponse } from "./Api";
import { Author, AuthorStatsPage, AuthorStatsPageApi } from "./Author";
import {
  Book,
  BookStatsGenre,
  BookStatsGenreApi,
  BookStatsLanguage,
  BookStatsLanguageApi,
  BookStatsYearPubishedApi,
  BookStatsYearPublished,
} from "./Book";
import { Bookworm } from "./Bookworm";
import { Genre } from "./Genre";
import { Language } from "./Language";
import { Rental, RentalStatsDuration, RentalStatsDurationApi } from "./Rental";
import { Review } from "./Review";
import { User, UserApi } from "./User";

export interface ApiState {
  response: {
    statusText?: string;
    message: string;
    status: "success" | "error" | undefined;
  };
}

export interface AppState {
  isLoading: boolean;
}

export interface AuthState {
  isSignedIn: boolean;
  token: string;
}

export interface AuthorState {
  authorsApi: ApiResponse<Author> | null;
  authorOverview: Author[] | null;
  authorStatsPage: AuthorStatsPage | null;
  authorStatsPageApi: AuthorStatsPageApi | null;
}

export interface BookState {
  booksApi: ApiResponse<Book> | null;
  bookOverview: Array<Book> | null;
  bookStatsGenre: Array<BookStatsGenre> | null;
  bookStatsGenreApi: BookStatsGenreApi | null;
  bookStatsLanguage: Array<BookStatsLanguage> | null;
  bookStatsLanguageApi: BookStatsLanguageApi | null;
  bookStatsYearPublished: Array<BookStatsYearPublished> | null;
  bookStatsYearPublishedApi: BookStatsYearPubishedApi | null;
}

export interface BookwormState {
  bookwormApi: ApiResponse<Bookworm> | null;
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
  bookwormOverview: Array<Bookworm> | null;
}

export interface GenreState {
  genresApi: ApiResponse<Genre> | null;
  genresOverview: Array<Genre> | null;
}

export interface LanguageState {
  languagesApi: ApiResponse<Language> | null;
  languagesOverview: Array<Language> | null;
}

export interface RentalState {
  rentalsApi: ApiResponse<Rental> | null;
  rentalsOverview: Array<Rental> | null;
  rentalStatsDurationApi: RentalStatsDurationApi | null;
  rentalStatsDuration: Array<RentalStatsDuration> | null;
}

export interface ReviewState {
  reviewsApi: ApiResponse<Review> | null;
  reviewsOverview: Array<Review> | null;
}

export interface UserState {
  user: User | null;
}
