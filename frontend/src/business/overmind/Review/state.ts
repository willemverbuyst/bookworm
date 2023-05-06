import { derived } from "overmind";
import { groupBy } from "../../functions";
import { ReviewState } from "../../models";

export const state: ReviewState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(({ getAllApi }: ReviewState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return groupBy(
      getAllApi.data.map((i) => ({
        id: i.id,
        description: i.description,
        rating: i.rating,
        bookTitle: i.book_title,
        reviewer: i.reviewer,
      })),
      "rating"
    );
  }),
};
