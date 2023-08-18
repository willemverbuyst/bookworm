import { ReviewData } from "../../models";

export const returnReviewObject = (review: ReviewData) => ({
  id: review.id,
  description: review.description,
  rating: review.rating,
  bookTitle: review.book_title,
  reviewer: review.reviewer,
});
