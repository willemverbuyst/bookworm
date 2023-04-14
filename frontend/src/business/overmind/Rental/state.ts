import { derived } from "overmind";
import { ApiResponse } from "../../models/Api";
import { Rental, RentalStatsDuration } from "../../models/Rental";
import { BaseState, UITable } from "../../models/State";

export interface RentalState extends BaseState<Rental> {
  statsDuration: Array<{
    durationLabel: string;
    duration: number;
    number: number;
  }> | null;
  statsDurationApi: ApiResponse<Array<RentalStatsDuration>> | null;
  ui: {
    table: UITable<
      Rental,
      {
        returned: string;
      }
    >;
  };
}

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
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
