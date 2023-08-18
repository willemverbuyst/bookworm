import { BookData } from "../../models";

export const returnBookObject = (book: BookData) => ({
  id: book.id,
  title: book.title,
  author: book.author,
  "year published": book.year_published,
  genre: book.genre,
  language: book.language,
});
