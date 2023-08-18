import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { PaymentState, SortDirection } from "../../models";
import { searchByBar, searchByColumn, sortByProperty } from "../helpers";
import { returnPaymentObject } from "./helpers";

export const state: PaymentState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { columns, searchKeys, queryString, sort, limit, page },
      },
    }: PaymentState) => {
      let startTime = 0;
      if (NODE_ENV === "development") startTime = Date.now();

      if (!getAllApi?.data?.length) {
        return [];
      }

      const data = getAllApi.data
        .map(returnPaymentObject)
        .filter(searchByBar(searchKeys, queryString))
        .slice((page - 1) * limit, page * limit)
        .sort(sortByProperty(sort))
        .filter(searchByColumn(columns));

      if (NODE_ENV === "development" && startTime) {
        utils.logInfo(startTime, "derived fn: overview payments");
      }

      return data;
    }
  ),
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
        email: {
          display: true,
          field: "email",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        date: {
          display: true,
          field: "date",
          showInput: false,
          queryString: "",
          isNumeric: false,
        },
        amount: {
          display: true,
          field: "amount",
          isNumeric: true,
          showInput: false,
          queryString: "",
        },
      },
      limit: 10,
      page: 1,
      noDataMessage: "no payments",
      filter: { amount: 5 },
      sort: { property: "email", sortDirection: SortDirection.ASCENDING },
      queryString: "",
      pagination: derived((table: PaymentState["ui"]["table"]) => {
        return !table.queryString;
      }),
      searchKeys: ["title", "email"],
      showAll: false,
      title: "overview of payments",
    },
  },
};
