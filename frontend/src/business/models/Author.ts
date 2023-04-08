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
}

export interface AuthorStatsPage {
  pages_per_author: Array<AuthorStatsPagesPerAuthor>;
  average_pages: number;
}
