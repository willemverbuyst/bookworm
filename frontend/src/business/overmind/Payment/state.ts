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
        table: { searchKeys, queryString, filter },
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
        .filter((i) => i.amount < filter.amount)
        .sort((a, b) =>
          genericSort(a, b, { property: "title", isDescending: false })
        );

      if (NODE_ENV === "development" && startTime) {
        logInfo(startTime, "derived fn: overview payments");
      }

      return data;
    }
  ),
  ui: {
    table: {
      columns: [
        { field: "title" },
        { field: "email" },
        { field: "date" },
        { field: "amount", isNumeric: true },
      ],
      limit: 10,
      page: 1,
      noDataMessage: "no payments",
      filter: { amount: 5 },
      sort: { email: SortDirection.ASCENDING },
      queryString: "",
      searchKeys: ["title", "email"],
      showAll: false,
      title: "overview of payments",
    },
  },
};
