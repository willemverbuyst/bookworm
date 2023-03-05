export interface Author {
  id: string;
  first_name: string;
  last_name: string;
  books_written: number;
}

export interface AuthorApi {
  status: string;
  data: Author[];
  message: string;
}
