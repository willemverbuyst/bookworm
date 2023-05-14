import { derived } from "overmind";
import { NODE_ENV } from "../../../config/environment";
import { logInfo } from "../../../utils/logger";
import { genericSearch } from "../../functions";
import { genericSort } from "../../functions/genericSort";
import { PaymentState } from "../../models/Payment";
import { SortDirection } from "../../models/State";

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
        .map((i) => ({
          id: i.id,
          amount: i.payment_amount,
          date: i.payment_date,
          title: i.title,
          email: i.user_email,
        }))
        .filter((a) => genericSearch(a, searchKeys, queryString, false))
        .slice((page - 1) * limit, page * limit)
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
        logInfo(startTime, "derived fn: overview payments");
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
      searchKeys: ["title", "email"],
      showAll: false,
      title: "overview of payments",
    },
  },
};
