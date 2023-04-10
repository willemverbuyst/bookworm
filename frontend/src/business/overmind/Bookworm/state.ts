import { derived } from "overmind";
import { BookwormState } from "../../models/State";

export const state: BookwormState = {
  getAllApi: null,
  bookwormDetailsApi: null,
  overview: derived(({ getAllApi }: BookwormState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
  ui: {
    table: {
      limit: 15,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
