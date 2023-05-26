import axios from "axios";
import { apiGetWithZod } from "../../../api";
import {
  ApiResponseReview,
  ApiResponseReviewAuthors,
  ApiResponseReviewBooksForAuthor,
} from "../../models";

export const api = {
  getAuthors: async (name: string) =>
    apiGetWithZod(`authors/?name=${name}`, ApiResponseReviewAuthors),

  getBooksForAuthor: async (authorId: string) =>
    apiGetWithZod(
      `books/?author_id=${authorId}`,
      ApiResponseReviewBooksForAuthor
    ),

  getReviews: async ({ limit = 10, page = 1 }) =>
    apiGetWithZod(`reviews/?limit=${limit}&page=${page}`, ApiResponseReview),

  postReview: async (
    author: string,
    bookTitle: string,
    review: string,
    rating: number | null,
    token: string
  ) => {
    const response = await axios.post(
      "reviews",
      {
        author,
        book_title: bookTitle,
        review,
        rating,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  },
};
