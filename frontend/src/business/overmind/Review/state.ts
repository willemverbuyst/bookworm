import { derived } from "overmind";
import { groupBy } from "../../functions/groupBy";
import { ApiResponse } from "../../models/State";

export interface Review {
  id: string;
  description: string;
  rating: number;
  book_title: string;
  reviewer: string;
}

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
