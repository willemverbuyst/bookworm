/* eslint-disable @typescript-eslint/no-shadow */
import { derived } from "overmind";
import { ReviewState } from "../../models/State";

export const state: ReviewState = {
  reviewsApi: null,
  reviewsOverview: derived(({ reviewsApi }: ReviewState) => {
    if (!reviewsApi?.data.length) {
      return null;
    }
    return reviewsApi.data;
  }),
};
