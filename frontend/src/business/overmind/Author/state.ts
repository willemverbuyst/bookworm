import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { AuthorState, SortDirection } from "../../models";
import { searchByBar, searchByColumn, sortByProperty } from "../helpers";
import { returnAuthorObject } from "./helpers";

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
        .map(returnAuthorObject)
        .filter(searchByBar(searchKeys, queryString))
        .sort(sortByProperty(sort))
        .filter(searchByColumn(columns));

      if (NODE_ENV === "development" && startTime) {
        utils.logInfo(startTime, "derived fn: overview authors");
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
        id: {
          display: false,
          field: "id",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "last name": {
          display: true,
          field: "last name",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        "first name": {
          display: true,
          field: "first name",
          showInput: false,
          queryString: "",
          isNumeric: false,
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
      pagination: derived((table: AuthorState["ui"]["table"]) => {
        return !table.queryString;
      }),
      queryString: "",
      searchKeys: ["last name", "first name"],
      showAll: false,
      title: "overview of authors",
    },
  },
};
