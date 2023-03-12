export interface Book {
  id: string;
  title: string;
  author: string;
  year_published: number;
  genre: string;
  language: string;
}

export interface BookApi {
  status: string;
  data: {
    id: string;
    title: string;
    author: string;
    year_published: number;
    genre: string;
    language: string;
  }[];
  message: string;
}
