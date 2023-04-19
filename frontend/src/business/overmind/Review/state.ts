import { derived } from "overmind";
import { groupBy } from "../../functions";
import { ReviewState } from "../../models";

export const state: ReviewState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return groupBy(getAllApi.data, "rating");
  }),
};
