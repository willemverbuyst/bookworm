/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "./interfaces";

export const state: State = {
  user: null,
  token: "",
  isLoggedIn: false,
  authorsApi: { status: "", data: [], message: "" },
  booksApi: { status: "", data: [], message: "" },
  allAuthors: derived(({ authorsApi }: State) => {
    if (!authorsApi.data.length) {
      return null;
    }
    return authorsApi.data
      .map((author) => ({ ...author }))
      .sort((author1, author2) =>
        `${author1.name}`.localeCompare(author2.name)
      );
  }),
  authorForStatistics: derived(({ authorsApi }: State) => {
    if (!authorsApi.data.length) {
      return null;
    }
    return authorsApi.data.map((author) => ({
      name: author.name,
      books_written: author.books_written,
    }));
  }),
  allBooks: derived(({ booksApi }: State) => {
    if (!booksApi.data.length) {
      return null;
    }
    return booksApi.data
      .map((book) => ({
        ...book,
        read: book.read === 1,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));
  }),
  booksGroupedByLanguage: derived(({ booksApi }: State) => {
    if (!booksApi.data.length) {
      return null;
    }

    return Object.entries(
      booksApi.data.reduce((rv: { [key: string]: number }, book) => {
        // eslint-disable-next-line no-param-reassign
        rv[book.language] = rv[book.language] + 1 || 1;
        return rv;
      }, {})
    ).map(([key, value]) => ({
      language: key,
      number: value,
    }));
  }),
  apiResponse: { message: "", status: undefined },
  testProp: 123,
};
