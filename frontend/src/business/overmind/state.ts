/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "./interfaces";

export const state: State = {
  user: null,
  token: "",
  isLoggedIn: false,
  allData: {
    authorsApi: { status: "", data: [], message: "" },
    booksApi: { status: "", data: [], message: "" },
  },
  allAuthors: derived(({ allData }: State) => {
    if (!allData.authorsApi.data.length) {
      return null;
    }
    return allData.authorsApi.data
      .map((author) => ({ ...author }))
      .sort((author1, author2) =>
        `${author1.name}`.localeCompare(author2.name)
      );
  }),
  authorForStatistics: derived((state: State) =>
    state.allData.authorsApi.data.map((author) => ({
      name: author.name,
      books_written: author.books_written,
    }))
  ),
  allBooks: derived(({ allData }: State) => {
    if (!allData.booksApi.data.length) {
      return null;
    }
    return allData.booksApi.data
      .map((book) => ({
        ...book,
        read: book.read === 1,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));
  }),
  booksGroupedByLanguage: derived((state: State) =>
    Object.entries(
      state.allData.booksApi.data.reduce(
        (rv: { [key: string]: number }, book) => {
          // eslint-disable-next-line no-param-reassign
          rv[book.language] = rv[book.language] + 1 || 1;
          return rv;
        },
        {}
      )
    ).map(([key, value]) => ({
      language: key,
      number: value,
    }))
  ),

  apiResponse: { message: "", status: undefined },
  testProp: 123,
};
