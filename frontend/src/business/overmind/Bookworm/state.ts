import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { functions } from "../../functions";
import { BookwormState, SortDirection } from "../../models";
import { searchByBar, searchByColumn, sortByProperty } from "../helpers";
import { returnBookwormObject } from "./helpers";

export const state: BookwormState = {
  isLoading: false,
  getAllApi: null,
  bookwormDetailsApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort },
      },
    }: BookwormState) => {
      let startTime = 0;
      if (NODE_ENV === "development") startTime = Date.now();

      if (!getAllApi?.data.length) {
        return [];
      }
      const data = getAllApi.data
        .map(returnBookwormObject)
        .filter(searchByBar(searchKeys, queryString))
        .sort(sortByProperty(sort))
        .filter(searchByColumn(columns));

      if (NODE_ENV === "development" && startTime) {
        utils.logInfo(startTime, "derived fn: overview bookworms");
      }

      return data;
    }
  ),
  statsLibrary: derived(({ statsLibraryApi }: BookwormState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!statsLibraryApi?.data.length) {
      return [];
    }

    const data = [...statsLibraryApi.data]
      .sort(functions.compare("user_is_active"))
      .sort(functions.compare("id"))
      .map((d) => d.id);

    if (NODE_ENV === "development" && startTime) {
      utils.logInfo(startTime, "derived fn: overview bookworms stats library");
    }

    return data;
  }),
  statsLibraryApi: null,
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
        "first name": {
          display: true,
          field: "first name",
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
        email: {
          display: true,
          field: "email",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        phone: {
          display: true,
          field: "phone",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        library: {
          display: true,
          field: "library",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        userIsActive: {
          display: false,
          field: "userIsActive",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
      },
      filter: {
        active: true,
      },
      sort: { property: "email", sortDirection: SortDirection.ASCENDING },
      limit: 15,
      noDataMessage: "no bookworms",
      page: 1,
      pagination: derived((table: BookwormState["ui"]["table"]) => {
        return !table.queryString;
      }),
      queryString: "",
      searchKeys: ["first name", "last name", "email"],
      showAll: false,
      title: "overview of bookworms",
    },
  },
};
