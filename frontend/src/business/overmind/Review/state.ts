import { derived } from "overmind";
import { ReviewState } from "../../models/State";

export const state: ReviewState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
