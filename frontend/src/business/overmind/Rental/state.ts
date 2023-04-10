import { derived } from "overmind";
import { RentalState } from "../../models/State";

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
      filter: "",
      limit: 20,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
