import { derived } from "overmind";
import { ReviewState } from "../../models/State";

export const state: ReviewState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: ReviewState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data;
  }),
};
