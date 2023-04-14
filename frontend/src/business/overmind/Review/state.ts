import { derived } from "overmind";
import { groupBy } from "../../functions/groupBy";
import { ApiResponse } from "../../models/Api";
import { Review } from "../../models/Review";

export interface ReviewState {
  getAllApi: ApiResponse<Array<Review>> | null;
  overview: { [key: string]: Array<Review> } | null;
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
