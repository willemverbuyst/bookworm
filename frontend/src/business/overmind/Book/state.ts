import { derived } from "overmind";
import { BookState } from "../../models/State";

export const state: BookState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: BookState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data
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
