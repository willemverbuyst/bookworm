import { derived } from "overmind";
import { groupBy } from "../../functions/groupBy";
import { ReviewState } from "../../models/Review";

export const state: ReviewState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return groupBy(getAllApi.data, "rating");
  }),
};
