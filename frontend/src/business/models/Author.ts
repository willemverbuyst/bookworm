import { ApiResponse, BaseState, UI } from "./State";

interface Author {
  id: string;
  first_name: string;
  last_name: string;
  books_written: number;
}

interface PagesPerAuthor {
  id: string;
  author: string;
  number_of_pages: number;
  number_of_books: number;
}

interface Page {
  pages_per_author: Array<PagesPerAuthor>;
  average_pages: number;
}

interface PageDisplay {
  name: string;
  number: number;
  book: number;
  avg: number;
}

export interface AuthorState extends BaseState<Author> {
  statsPage: {
    pages_per_author: PageDisplay[];
    average_pages: number;
  } | null;
  statsPageApi: ApiResponse<Page> | null;
  ui: UI<Author, null>;
}
