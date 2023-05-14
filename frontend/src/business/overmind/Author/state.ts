import { derived } from "overmind";
import { NODE_ENV } from "../../../config/environment";
import { logInfo } from "../../../utils/logger";
import { genericSearch, genericSort } from "../../functions";
import { AuthorState, SortDirection } from "../../models";

export const state: AuthorState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort },
      },
    }: AuthorState) => {
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
        .filter((a) => genericSearch(a, searchKeys, queryString, false))
        .sort((a, b) =>
          genericSort(a, b, {
            property: sort.property,
            sortDirection: sort.sortDirection,
          })
        )
        .filter((i) =>
          Object.values(columns)
            .filter((c) => c.display)
            .every((c) => genericSearch(i, [c.field], c.queryString, false))
        );

      if (NODE_ENV === "development" && startTime) {
        logInfo(startTime, "derived fn: overview authors");
      }

      return data;
    }
  ),
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
      columns: {
        id: { display: false, field: "id", showInput: false, queryString: "" },
        "last name": {
          display: true,
          field: "last name",
          showInput: false,
          queryString: "",
        },
        "first name": {
          display: true,
          field: "first name",
          showInput: false,
          queryString: "",
        },
        "books written": {
          display: true,
          field: "books written",
          showInput: false,
          queryString: "",
          isNumeric: true,
        },
      },
      filter: null,
      sort: { property: "first name", sortDirection: SortDirection.ASCENDING },
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
