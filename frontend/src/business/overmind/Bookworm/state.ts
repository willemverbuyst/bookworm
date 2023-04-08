import { derived } from "overmind";
import { BookwormState } from "../../models/State";

export const state: BookwormState = {
  getAllApiResponse: null,
  bookwormDetailsApi: null,
  overview: derived(({ getAllApiResponse }: BookwormState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data;
  }),
};
