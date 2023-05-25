/* eslint-disable no-param-reassign */
import { debounce, pipe } from "overmind";
import * as o from "./operators";

export const showReviewsPage = pipe(o.setReviewsPage(), o.getReviews());

export const showAddReviewPage = o.setAddReviewPage();

export const getAuthors = pipe(debounce(300), o.getAuthors());
