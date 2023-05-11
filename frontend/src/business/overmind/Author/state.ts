import { derived } from "overmind";
import { NODE_ENV } from "../../../config/environment";
import { logInfo } from "../../../utils/logger";
import { AuthorState } from "../../models";

export const state: AuthorState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(({ getAllApi }: AuthorState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!getAllApi?.data.length) {
      return [];
    }

    const data = getAllApi.data
      .map((i) => ({
        id: i.id,
        "first name": i.first_name,
        "last name": i.last_name,
        "books written": i.books_written,
      }))
      .sort((author1, author2) =>
        `${author1["last name"]}`.localeCompare(author2["last name"])
      );

    if (NODE_ENV === "development" && startTime) {
      logInfo(startTime, "derived fn: overview authors");
    }

    return data;
  }),
  statsPage: derived(({ statsPageApi }: AuthorState) => {
    if (!statsPageApi?.data.pages_per_author.length) {
      return null;
    }
    return {
      pagesPerAuthor: [...statsPageApi.data.pages_per_author].map((d) => ({
        author: d.author,
        numberOfPages: Number(d.number_of_pages),
        numberOfBooks: Number(d.number_of_books),
        avg: statsPageApi.data.average_pages,
      })),
      averagePages: statsPageApi.data.average_pages,
    };
  }),
  statsPageApi: null,
  ui: {
    table: {
      columns: [
        { field: "last name" },
        { field: "first name" },
        { field: "books written", isNumeric: true },
      ],
      filter: null,
      sort: null,
      limit: 10,
      noDataMessage: "no authors",
      page: 1,
      queryString: "",
      searchKeys: ["last name", "first name"],
      showAll: false,
      title: "overview of authors",
    },
  },
};
