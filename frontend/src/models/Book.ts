export interface Book {
  id: string;
  title: string;
  language: string;
  author: string;
  year: number;
  read: boolean;
}

export interface BookApi {
  id: string;
  title: string;
  language: string;
  author: string;
  year: number;
  read: number;
}
