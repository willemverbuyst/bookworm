import axios from "axios";
import { apiGet } from "../../../api";

export const api = {
  getReviews: async ({ limit = 10, page = 1 }) =>
    apiGet({ url: `reviews/?limit=${limit}&page=${page}` }),

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
