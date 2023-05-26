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
  authorsForReviewApi: null,
  authorsForReview: derived(({ authorsForReviewApi }: ReviewState) => {
    let startTime = 0;
    if (NODE_ENV === "development") startTime = Date.now();

    if (!authorsForReviewApi?.data.length) {
      return [];
    }
    const data = authorsForReviewApi.data.map((a) => ({
      id: a.id,
      nameOfAuthor: a.name_of_author,
    }));

    if (NODE_ENV === "development" && startTime) {
      utils.logInfo(startTime, "derived fn: authors for review");
    }

    return data;
  }),
  booksByAuthorForReviewApi: null,
  booksByAuthorForReview: derived(
    ({ booksByAuthorForReviewApi }: ReviewState) => {
      let startTime = 0;
      if (NODE_ENV === "development") startTime = Date.now();

      if (!booksByAuthorForReviewApi?.data.length) {
        return [];
      }
      const { data } = booksByAuthorForReviewApi;

      if (NODE_ENV === "development" && startTime) {
        utils.logInfo(startTime, "derived fn: books by author for review");
      }

      return data;
    }
  ),
};
