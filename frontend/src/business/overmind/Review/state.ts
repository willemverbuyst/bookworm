import { derived } from "overmind";
import { Review } from "../../models/Review";
import { BaseState } from "../../models/State";

export type ReviewState = BaseState<Review>;

function groupBy(xs: any, key: any) {
  return xs.reduce((rv: any, x: any) => {
    // eslint-disable-next-line no-param-reassign
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

export const state: ReviewState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return groupBy(getAllApi.data, "rating");
  }),
};
