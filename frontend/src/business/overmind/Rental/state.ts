import { derived } from "overmind";
import { RentalState } from "../../models";

export const state: RentalState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: RentalState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
  statsDuration: derived(({ statsDurationApi }: RentalState) => {
    if (!statsDurationApi?.data.length) {
      return null;
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
