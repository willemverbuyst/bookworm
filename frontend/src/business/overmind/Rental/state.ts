import { derived } from "overmind";
import { WEEKDAYS } from "../../functions";
import { RentalState } from "../../models";

export const state: RentalState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: RentalState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data;
  }),
  statsDay: derived(({ statsDayApi }: RentalState) => {
    if (!statsDayApi?.data.length) {
      return [];
    }
    return [...statsDayApi.data].map((d) => ({
      rentals: d.number_of_rentals,
      returns: d.number_of_returns,
      day: WEEKDAYS[d.day_of_the_week - 1],
      fullMark: Math.ceil(
        Math.max(...statsDayApi.data.map((i) => i.number_of_rentals)) * 1.1
      ),
    }));
  }),
  statsDayApi: null,
  statsDuration: derived(({ statsDurationApi }: RentalState) => {
    if (!statsDurationApi?.data.length) {
      return [];
    }
    return [...statsDurationApi.data].map((d) => ({
      durationLabel: `${d.duration}d`,
      duration: d.duration,
      number: Number(d.total_rentals),
    }));
  }),
  statsDurationApi: null,
  ui: {
    table: {
      columns: [
        { field: "title" },
        { field: "author" },
        { field: "rental_date" },
        { field: "return_date" },
      ],
      filter: { returned: "not_returned" },
      limit: 20,
      noDataMessage: "no rentals",
      page: 1,
      queryString: "",
      searchKeys: ["title", "author"],
      showAll: false,
      title: "overview of rentals",
    },
  },
};
