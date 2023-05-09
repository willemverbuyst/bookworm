import { derived } from "overmind";
import { logInfo } from "../../../utils/logger";
import { BookState } from "../../models";

export const state: BookState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(({ getAllApi }: BookState) => {
    let startTime = 0;
    if (process.env.NODE_ENV === "development") startTime = Date.now();

    if (!getAllApi?.data.length) {
      return [];
    }
    const data = getAllApi.data
      .map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author,
        "year published": book.year_published,
        genre: book.genre,
        language: book.language,
      }))
      .sort((book1, book2) => `${book1.title}`.localeCompare(book2.title));

    if (process.env.NODE_ENV === "development" && startTime) {
      logInfo(startTime, "derived fn: overview books");
    }

    return data;
  }),
  statsGenre: derived(({ statsGenreApi }: BookState) => {
    if (!statsGenreApi?.data.length) {
      return [];
    }
    return [...statsGenreApi.data].map((d) => ({
      genre: d.genre,
      numberOfBooks: Number(d.number_of_books),
    }));
  }),
  statsGenreApi: null,
  statsLanguage: derived(({ statsLanguageApi }: BookState) => {
    if (!statsLanguageApi?.data.length) {
      return [];
    }
    return [...statsLanguageApi.data].map((d) => ({
      language: d.language,
      numberOfBooks: d.number_of_books,
    }));
  }),
  statsLanguageApi: null,
  statsYearPublished: derived(({ statsYearPublishedApi }: BookState) => {
    if (!statsYearPublishedApi?.data.length) {
      return [];
    }
    return [...statsYearPublishedApi.data].map((d) => ({
      yearPublished: Number(d.year_published),
      numberOfBooks: Number(d.number_of_books),
    }));
  }),
  statsYearPublishedApi: null,
  ui: {
    table: {
      columns: [
        { field: "title" },
        { field: "author" },
        { field: "year published" },
        { field: "genre" },
        { field: "language" },
      ],
      filter: {
        genre: "",
        language: "",
      },
      limit: 10,
      noDataMessage: "no books",
      page: 1,
      queryString: "",
      searchKeys: ["title", "author"],
      showAll: false,
      title: "overview of books",
    },
  },
};
