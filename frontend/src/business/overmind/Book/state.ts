import { derived } from "overmind";
import { ApiResponse } from "../../models/Api";
import {
  Book,
  BookStatsGenre,
  BookStatsLanguage,
  BookStatsYearPublished,
} from "../../models/Book";
import { BaseState } from "../../models/State";

export interface BookState extends BaseState<Book> {
  statsGenre: Array<BookStatsGenre> | null;
  statsGenreApi: ApiResponse<Array<BookStatsGenre>> | null;
  statsLanguage: Array<BookStatsLanguage> | null;
  statsLanguageApi: ApiResponse<Array<BookStatsLanguage>> | null;
  statsYearPublished: Array<BookStatsYearPublished> | null;
  statsYearPublishedApi: ApiResponse<Array<BookStatsYearPublished>> | null;
  ui: {
    table: {
      columns: Array<{ field: keyof Book; isNumeric?: boolean }>;
      genre: string;
      language: string;
      limit: number;
      page: number;
      queryString: string;
      showAll: boolean;
    };
  };
}

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
  ui: {
    table: {
      columns: [
        { field: "title" },
        { field: "author" },
        { field: "year_published" },
        { field: "genre" },
        { field: "language" },
      ],
      genre: "",
      language: "",
      limit: 10,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
