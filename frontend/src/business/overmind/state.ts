/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "./interfaces";

export const state: State = {
  user: null,
  token: "",
  isSignedIn: false,
  authorsApi: null,
  authorStatsPageApi: null,
  authorStatsPage: derived(({ authorStatsPageApi }: State) => {
    if (!authorStatsPageApi?.data.pages_per_author.length) {
      return null;
    }
    return authorStatsPageApi.data.pages_per_author;
  }),
  booksApi: null,
  bookStatsGenreApi: null,
  bookStatsLanguageApi: null,
  genresApi: null,
  languagesApi: null,
  authorOverview: derived(({ authorsApi }: State) => {
    if (!authorsApi?.data.length) {
      return null;
    }
    return authorsApi.data
      .map((author) => ({
        ...author,
      }))
      .sort((author1, author2) =>
        `${author1.last_name}`.localeCompare(author2.last_name)
      );
  }),
  bookOverview: derived(({ booksApi }: State) => {
    if (!booksApi?.data.length) {
      return null;
    }
    return booksApi.data
      .map((book) => ({
        ...book,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));
  }),
  genresOverview: derived(({ genresApi }: State) => {
    if (!genresApi?.data.length) {
      return null;
    }
    return genresApi.data;
  }),
  languagesOverview: derived(({ languagesApi }: State) => {
    if (!languagesApi?.data.length) {
      return null;
    }
    return languagesApi.data;
  }),
  bookStatsGenre: derived(({ bookStatsGenreApi }: State) => {
    if (!bookStatsGenreApi?.data.length) {
      return null;
    }
    return bookStatsGenreApi.data;
  }),
  bookStatsLanguage: derived(({ bookStatsLanguageApi }: State) => {
    if (!bookStatsLanguageApi?.data.length) {
      return null;
    }
    return bookStatsLanguageApi.data;
  }),
  apiResponse: { message: "", status: undefined },
  testProp: 123,
};
