import { ApiResponse, BaseState, UITable } from "./State";

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
  books_written: number;
}

export interface AuthorStatsPagesPerAuthor {
  id: string;
  author: string;
  number_of_pages: number;
  number_of_books: number;
}

export interface AuthorStatsPage {
  pages_per_author: Array<AuthorStatsPagesPerAuthor>;
  average_pages: number;
}

export interface AuthorState extends BaseState<Author> {
  statsPage: {
    pages_per_author: Array<{
      name: string;
      number: number;
      book: number;
      avg: number;
    }>;
    average_pages: number;
  } | null;
  statsPageApi: ApiResponse<AuthorStatsPage> | null;
  ui: {
    table: UITable<Author, null>;
  };
}
