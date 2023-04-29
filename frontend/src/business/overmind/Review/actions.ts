import { pipe } from "overmind";
import { getAuthors, shouldLoadAuthors } from "../Author/operators";
import { getBooks, shouldLoadBooks } from "../Book/operators";
import * as o from "./operators";

export const showReviewsPage = pipe(o.setReviewsPage(), o.getReviews());

export const showAddReviewPage = pipe(
  o.setAddReviewPage(),
  shouldLoadAuthors(),
  shouldLoadBooks,
  getAuthors(),
  // should be fixed with an api call, with author id
  getBooks()
);
