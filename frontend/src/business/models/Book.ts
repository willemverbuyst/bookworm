import { ApiResponse, BaseState, UITable } from "./State";

export interface Book {
  id: string;
  title: string;
  author: string;
  year_published: number;
  genre: string;
  language: string;
}

export interface BookStatsGenre {
  id: string;
  genre: string;
  number_of_books: number;
}

export interface BookStatsLanguage {
  id: string;
  language: string;
  number_of_books: number;
}

export interface BookStatsYearPublished {
  year_published: string;
  number_of_books: number;
}

export interface BookState extends BaseState<Book> {
  statsGenre: Array<{ name: string; number: number }> | null;
  statsGenreApi: ApiResponse<Array<BookStatsGenre>> | null;
  statsLanguage: Array<{
    language: string;
    number: number;
  }> | null;
  statsLanguageApi: ApiResponse<Array<BookStatsLanguage>> | null;
  statsYearPublished: Array<{ name: string; number: number }> | null;
  statsYearPublishedApi: ApiResponse<Array<BookStatsYearPublished>> | null;
  ui: {
    table: UITable<
      Book,
      {
        genre: string;
        language: string;
      }
    >;
  };
}
