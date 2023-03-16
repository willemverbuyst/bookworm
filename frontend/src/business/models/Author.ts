export interface Author {
  id: string;
  first_name: string;
  last_name: string;
  books_written: number;
}

export interface AuthorStatsPage {
  id: string;
  author: string;
  number_of_pages: number;
}

export interface AuthorApi {
  status: string;
  data: Author[];
  message: string;
}

export interface AuthorStatsPageApi {
  status: string;
  data: AuthorStatsPage[];
  message: string;
}
