import { derived } from "overmind";
import { Review } from "../../models/Review";
import { BaseState } from "../../models/State";

export type ReviewState = BaseState<Review>;

export const state: ReviewState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
