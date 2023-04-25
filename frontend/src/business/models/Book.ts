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

interface GenreDisplay {
  name: string;
  number: number;
}

interface Language {
  id: string;
  language: string;
  number_of_books: number;
}

interface LanguageDisplay {
  language: string;
  number: number;
}

interface YearPublished {
  year_published: string;
  number_of_books: number;
}

interface YearPublishedDisplay {
  name: string;
  number: number;
}

interface Filter {
  genre: string;
  language: string;
}

export interface BookState extends BaseState<Book> {
  statsGenre: GenreDisplay[];
  statsGenreApi: ApiResponse<Genre[]> | null;
  statsLanguage: LanguageDisplay[];
  statsLanguageApi: ApiResponse<Language[]> | null;
  statsYearPublished: YearPublishedDisplay[];
  statsYearPublishedApi: ApiResponse<YearPublished[]> | null;
  ui: UI<Book, Filter>;
}
