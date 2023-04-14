import { derived } from "overmind";
import { ApiResponse, BaseState, UITable } from "../../models/State";

export interface Book {
  id: string;
  title: string;
  author: string;
  year_published: number;
  genre: string;
  language: string;
}

export interface BookStatsGenre {
  id: string;
  genre: string;
  number_of_books: number;
}

export interface BookStatsLanguage {
  id: string;
  language: string;
  number_of_books: number;
}

export interface BookStatsYearPublished {
  year_published: string;
  number_of_books: number;
}

export interface BookState extends BaseState<Book> {
  statsGenre: Array<{ name: string; number: number }> | null;
  statsGenreApi: ApiResponse<Array<BookStatsGenre>> | null;
  statsLanguage: Array<{
    language: string;
    number: number;
  }> | null;
  statsLanguageApi: ApiResponse<Array<BookStatsLanguage>> | null;
  statsYearPublished: Array<{ name: string; number: number }> | null;
  statsYearPublishedApi: ApiResponse<Array<BookStatsYearPublished>> | null;
  ui: {
    table: UITable<
      Book,
      {
        genre: string;
        language: string;
      }
    >;
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
