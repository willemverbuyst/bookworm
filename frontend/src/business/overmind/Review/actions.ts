/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import { getAuthors } from "../Author/operators";
import { getBooks } from "../Book/operators";
import * as o from "./operators";

export const showReviewsPage = pipe(o.setReviewsPage(), o.getReviews());

export const showAddReviewPage = pipe(
  o.setAddReviewPage(),
  o.shouldLoadAuthorsAndBooks(),
  getAuthors(),
  getBooks()
);
