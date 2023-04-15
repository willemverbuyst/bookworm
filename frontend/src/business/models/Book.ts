import { ApiResponse, BaseState, UI } from "./State";

interface Book {
  id: string;
  title: string;
  author: string;
  year_published: number;
  genre: string;
  language: string;
}

interface Genre {
  id: string;
  genre: string;
  number_of_books: number;
}

type GenreDisplay = Omit<Genre, "number_of_books">;

interface Language {
  id: string;
  language: string;
  number_of_books: number;
}

type LanguageDislay = Omit<Language, "number_of_books">;

interface YearPublished {
  year_published: string;
  number_of_books: number;
}

type YearPublishedDisplay = Omit<YearPublished, "number_of_books">;

interface Filter {
  genre: string;
  language: string;
}

export interface BookState extends BaseState<Book> {
  statsGenre: GenreDisplay[] | null;
  statsGenreApi: ApiResponse<Genre[]> | null;
  statsLanguage: LanguageDislay[] | null;
  statsLanguageApi: ApiResponse<Language[]> | null;
  statsYearPublished: YearPublishedDisplay[] | null;
  statsYearPublishedApi: ApiResponse<YearPublished[]> | null;
  ui: UI<Book, Filter>;
}
