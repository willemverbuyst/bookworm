/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { BookState, State } from "../../models/State";

export const state: BookState = {
  booksApi: null,
  bookOverview: derived(({ booksApi }: State["book"]) => {
    if (!booksApi?.data.length) {
      return null;
    }
    return booksApi.data
      .map((book) => ({
        ...book,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));
  }),
  bookStatsGenre: derived(({ bookStatsGenreApi }: BookState) => {
    if (!bookStatsGenreApi?.data.length) {
      return null;
    }
    return bookStatsGenreApi.data;
  }),
  bookStatsGenreApi: null,
  bookStatsLanguage: derived(({ bookStatsLanguageApi }: BookState) => {
    if (!bookStatsLanguageApi?.data.length) {
      return null;
    }
    return bookStatsLanguageApi.data;
  }),
  bookStatsLanguageApi: null,
  bookStatsYearPublished: derived(
    ({ bookStatsYearPublishedApi }: BookState) => {
      if (!bookStatsYearPublishedApi?.data.length) {
        return null;
      }
      return bookStatsYearPublishedApi.data;
    }
  ),
  bookStatsYearPublishedApi: null,
};
