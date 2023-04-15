import { derived } from "overmind";
import { BookState } from "../../models";

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
    return [...statsGenreApi.data].map((d) => ({
      name: d.genre,
      number: Number(d.number_of_books),
    }));
  }),
  statsGenreApi: null,
  statsLanguage: derived(({ statsLanguageApi }: BookState) => {
    if (!statsLanguageApi?.data.length) {
      return null;
    }
    return [...statsLanguageApi.data].map((d) => ({
      language: d.language,
      number: d.number_of_books,
    }));
  }),
  statsLanguageApi: null,
  statsYearPublished: derived(({ statsYearPublishedApi }: BookState) => {
    if (!statsYearPublishedApi?.data.length) {
      return null;
    }
    return [...statsYearPublishedApi.data].map((d) => ({
      name: d.year_published,
      number: Number(d.number_of_books),
    }));
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
