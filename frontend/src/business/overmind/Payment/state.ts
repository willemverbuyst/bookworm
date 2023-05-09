import { derived } from "overmind";
import { logInfo } from "../../../utils/logger";
import { genericSearch } from "../../functions";
import { genericSort } from "../../functions/genericSort";
import { PaymentState } from "../../models/Payment";

export const state: PaymentState = {
  isLoading: false,
  getAllApi: null,
  overview: derived(
    ({
      getAllApi,
      ui: {
        table: { searchKeys, queryString, limit, page },
      },
    }: PaymentState) => {
      let startTime = 0;
      if (process.env.NODE_ENV === "development") startTime = Date.now();

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
        .sort((a, b) =>
          genericSort(a, b, { property: "title", isDescending: false })
        )
        .slice((page - 1) * limit, page * limit);

      if (process.env.NODE_ENV === "development" && startTime) {
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
      filter: null,
      queryString: "",
      searchKeys: ["title", "email"],
      showAll: false,
      title: "overview of payments",
    },
  },
};
