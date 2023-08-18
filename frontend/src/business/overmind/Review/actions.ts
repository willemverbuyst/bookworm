/* eslint-disable no-param-reassign */
import { debounce, pipe } from "overmind";
import {
  fetchAuthors,
  getReviews,
  setAddReviewPage,
  setReviewsPage,
} from "./operators";

export { getBooksForAuthor } from "./operators";

export const showReviewsPage = pipe(setReviewsPage, getReviews);

export const showAddReviewPage = setAddReviewPage;

export const getAuthors = pipe(debounce(300), fetchAuthors);
