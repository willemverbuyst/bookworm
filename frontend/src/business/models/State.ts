import { ApiResponse } from "./Api";
import { Author, AuthorStatsPage } from "./Author";
import {
  Book,
  BookStatsGenre,
  BookStatsLanguage,
  BookStatsYearPublished,
} from "./Book";
import { Bookworm } from "./Bookworm";
import { Genre } from "./Genre";
import { Language } from "./Language";
import { Rental, RentalStatsDuration } from "./Rental";
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

export interface BaseState<T> {
  getAllApiResponse: ApiResponse<Array<T>> | null;
  overview: Array<T> | null;
}

export interface AuthorState extends BaseState<Author> {
  statsPage: AuthorStatsPage | null;
  statsPageApi: ApiResponse<AuthorStatsPage> | null;
}

export interface BookState extends BaseState<Book> {
  statsGenre: Array<BookStatsGenre> | null;
  statsGenreApi: ApiResponse<Array<BookStatsGenre>> | null;
  statsLanguage: Array<BookStatsLanguage> | null;
  statsLanguageApi: ApiResponse<Array<BookStatsLanguage>> | null;
  statsYearPublished: Array<BookStatsYearPublished> | null;
  statsYearPublishedApi: ApiResponse<Array<BookStatsYearPublished>> | null;
}

export interface BookwormState extends BaseState<Bookworm> {
  bookwormDetailsApi: Omit<UserApi, "token"> | null;
}

export type GenreState = BaseState<Genre>;

export type LanguageState = BaseState<Language>;

export interface RentalState extends BaseState<Rental> {
  statsDuration: Array<RentalStatsDuration> | null;
  statsDurationApi: ApiResponse<Array<RentalStatsDuration>> | null;
}

export type ReviewState = BaseState<Review>;

export interface UserState {
  user: User | null;
}
