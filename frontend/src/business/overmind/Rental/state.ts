import { derived } from "overmind";
import { ApiResponse } from "../../models/Api";
import { Rental, RentalStatsDuration } from "../../models/Rental";
import { BaseState } from "../../models/State";

export interface RentalState extends BaseState<Rental> {
  statsDuration: Array<RentalStatsDuration> | null;
  statsDurationApi: ApiResponse<Array<RentalStatsDuration>> | null;
  ui: {
    table: {
      columns: Array<{ field: keyof Rental; isNumeric?: boolean }>;
      filter: string;
      limit: number;
      page: number;
      queryString: string;
      showAll: boolean;
    };
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
    return statsDurationApi.data;
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
      filter: "not_returned",
      limit: 20,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
