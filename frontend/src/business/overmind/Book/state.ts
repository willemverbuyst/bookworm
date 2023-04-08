import { derived } from "overmind";
import { BookState } from "../../models/State";

export const state: BookState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: BookState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data
      .map((book) => ({
        ...book,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));
  }),
  statsGenre: derived(({ statsGenreApi }: BookState) => {
    if (!statsGenreApi?.data.length) {
      return null;
    }
    return statsGenreApi.data;
  }),
  statsGenreApi: null,
  statsLanguage: derived(({ statsLanguageApi }: BookState) => {
    if (!statsLanguageApi?.data.length) {
      return null;
    }
    return statsLanguageApi.data;
  }),
  statsLanguageApi: null,
  statsYearPublished: derived(({ statsYearPublishedApi }: BookState) => {
    if (!statsYearPublishedApi?.data.length) {
      return null;
    }
    return statsYearPublishedApi.data;
  }),
  statsYearPublishedApi: null,
};
