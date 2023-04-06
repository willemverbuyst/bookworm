/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { State } from "../models/State";

export const state: State = {
  auth: {
    isSignedIn: false,
    token: "",
  },
  apiResponse: { message: "", status: undefined },
  authorsApi: null,
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
  authorStatsPage: derived(({ authorStatsPageApi }: State) => {
    if (!authorStatsPageApi?.data.pages_per_author.length) {
      return null;
    }
    return {
      pages_per_author: authorStatsPageApi.data.pages_per_author,
      average_pages: authorStatsPageApi.data.average_pages,
    };
  }),
  authorStatsPageApi: null,
  booksApi: null,
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
  bookStatsGenre: derived(({ bookStatsGenreApi }: State) => {
    if (!bookStatsGenreApi?.data.length) {
      return null;
    }
    return bookStatsGenreApi.data;
  }),
  bookStatsGenreApi: null,
  bookStatsLanguage: derived(({ bookStatsLanguageApi }: State) => {
    if (!bookStatsLanguageApi?.data.length) {
      return null;
    }
    return bookStatsLanguageApi.data;
  }),
  bookStatsLanguageApi: null,
  bookStatsYearPublished: derived(({ bookStatsYearPublishedApi }: State) => {
    if (!bookStatsYearPublishedApi?.data.length) {
      return null;
    }
    return bookStatsYearPublishedApi.data;
  }),
  bookStatsYearPublishedApi: null,
  bookwormApi: null,
  bookwormDetailsApi: null,
  bookwormOverview: derived(({ bookwormApi }: State) => {
    if (!bookwormApi?.data.length) {
      return null;
    }
    return bookwormApi.data;
  }),
  genresApi: null,
  genresOverview: derived(({ genresApi }: State) => {
    if (!genresApi?.data.length) {
      return null;
    }
    return genresApi.data;
  }),
  languagesApi: null,
  languagesOverview: derived(({ languagesApi }: State) => {
    if (!languagesApi?.data.length) {
      return null;
    }
    return languagesApi.data;
  }),
  rentalsApi: null,
  rentalsOverview: derived(({ rentalsApi }: State) => {
    if (!rentalsApi?.data.length) {
      return null;
    }
    return rentalsApi.data;
  }),
  rentalStatsDuration: derived(({ rentalStatsDurationApi }: State) => {
    if (!rentalStatsDurationApi?.data.length) {
      return null;
    }
    return rentalStatsDurationApi.data;
  }),
  rentalStatsDurationApi: null,
  reviewsApi: null,
  reviewsOverview: derived(({ reviewsApi }: State) => {
    if (!reviewsApi?.data.length) {
      return null;
    }
    return reviewsApi.data;
  }),
  user: null,
};
