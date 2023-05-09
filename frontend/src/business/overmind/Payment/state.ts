import { derived } from "overmind";
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
      let depTime = 0;
      if (process.env.NODE_ENV === "development") depTime = Date.now();

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

      if (process.env.NODE_ENV === "development" && depTime) {
        const resultEndTime = Math.round((Date.now() - depTime) * 100) / 100;

        let color = "red";
        if (resultEndTime < 100) color = "green";
        if (resultEndTime < 200) color = "orange";

        console.info(
          `%c⏱ ${resultEndTime} ms`,
          ` font-size: 1rem;
            font-weight: bold;
            color: ${color}`,
          "overview payment"
        );
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
