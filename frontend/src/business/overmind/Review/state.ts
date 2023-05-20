import { derived } from "overmind";
import { NODE_ENV } from "../../../config";
import { utils } from "../../../utils";
import { functions } from "../../functions";
import { ReviewState } from "../../models";

export const state: ReviewState = {
  getAllApi: null,
  isLoading: false,
  overview: derived(({ getAllApi }: ReviewState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!getAllApi?.data.length) {
      return [];
    }
    const data = functions.groupBy(
      getAllApi.data.map((i) => ({
        id: i.id,
        description: i.description,
        rating: i.rating,
        bookTitle: i.book_title,
        reviewer: i.reviewer,
      })),
      "rating"
    );

    if (NODE_ENV === "development" && startTime) {
      utils.logInfo(startTime, "derived fn: overview reviews");
    }

    return data;
  }),
};
