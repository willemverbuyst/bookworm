import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { functions } from "../../functions";
import { BookState, SortDirection } from "../../models";

export const state: BookState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort },
      },
    }: BookState) => {
      let startTime = 0;
      if (NODE_ENV === "development") startTime = Date.now();

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
        .filter((a) =>
          functions.genericSearch(a, searchKeys, queryString, false)
        )
        .sort((a, b) =>
          functions.genericSort(a, b, {
            property: sort.property,
            sortDirection: sort.sortDirection,
          })
        )
        .filter((i) =>
          Object.values(columns)
            .filter((c) => c.display)
            .every((c) =>
              functions.genericSearch(i, [c.field], c.queryString, false)
            )
        );

      if (NODE_ENV === "development" && startTime) {
        utils.logInfo(startTime, "derived fn: overview books");
      }

      return data;
    }
  ),
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
      columns: {
        id: {
          display: false,
          field: "id",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        title: {
          display: true,
          field: "title",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        author: {
          display: true,
          field: "author",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "year published": {
          display: true,
          field: "year published",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        genre: {
          display: true,
          field: "genre",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        language: {
          display: true,
          field: "language",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
      },
      filter: {
        genre: "",
        language: "",
      },
      sort: { property: "title", sortDirection: SortDirection.ASCENDING },
      limit: 10,
      noDataMessage: "no books",
      page: 1,
      pagination: derived((table: BookState["ui"]["table"]) => {
        return !table.queryString;
      }),
      queryString: "",
      searchKeys: ["title", "author"],
      showAll: false,
      title: "overview of books",
    },
  },
};
