import { GetAllApiResponse } from "./Api";
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

export interface StateBase<T> {
  getAllApiResponse: GetAllApiResponse<Array<T>> | null;
  overview: Array<T> | null;
}

export interface AuthorState extends StateBase<Author> {
  authorStatsPage: AuthorStatsPage | null;
  authorStatsPageApi: AuthorStatsPageApi | null;
}

export interface BookState extends StateBase<Book> {
  bookStatsGenre: Array<BookStatsGenre> | null;
  bookStatsGenreApi: BookStatsGenreApi | null;
  bookStatsLanguage: Array<BookStatsLanguage> | null;
  bookStatsLanguageApi: BookStatsLanguageApi | null;
  bookStatsYearPublished: Array<BookStatsYearPublished> | null;
  bookStatsYearPublishedApi: BookStatsYearPubishedApi | null;
}

export interface BookwormState extends StateBase<Bookworm> {
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
}

export type GenreState = StateBase<Genre>;

export type LanguageState = StateBase<Language>;

export interface RentalState extends StateBase<Rental> {
  rentalStatsDurationApi: RentalStatsDurationApi | null;
  rentalStatsDuration: Array<RentalStatsDuration> | null;
}

export type ReviewState = StateBase<Review>;

export interface UserState {
  user: User | null;
}
