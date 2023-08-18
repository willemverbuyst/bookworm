import { AuthorData } from "../../models";

export const returnAuthorObject = (author: AuthorData) => ({
  id: author.id,
  "first name": author.first_name,
  "last name": author.last_name,
  "books written": author.books_written,
});
