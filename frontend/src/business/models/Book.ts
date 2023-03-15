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

export interface BookApi {
  status: string;
  data: Book[];
  message: string;
}

export interface BookStatsGenreApi {
  status: string;
  data: BookStatsGenre[];
  message: string;
}

export interface BookStatsLanguageApi {
  status: string;
  data: BookStatsLanguage[];
  message: string;
}
