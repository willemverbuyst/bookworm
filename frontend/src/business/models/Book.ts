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

export interface BookStatsGenreApi {
  status: string;
  result: number;
  data: Array<BookStatsGenre>;
  message: string;
}

export interface BookStatsLanguageApi {
  status: string;
  result: number;
  data: Array<BookStatsLanguage>;
  message: string;
}

export interface BookStatsYearPubishedApi {
  status: string;
  result: number;
  data: Array<BookStatsYearPublished>;
  message: string;
}
