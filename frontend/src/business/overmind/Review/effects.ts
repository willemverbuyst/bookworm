import axios, { AxiosError } from "axios";
import { ReviewApi } from "../../models/Review";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getReviews: async ({
    limit = 10,
    page = 1,
  }): Promise<ReviewApi | AxiosError | null> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/reviews/?limit=${limit}&page=${page}`
      );
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(JSON.stringify(error.response));
        return error;
      }
      console.error(JSON.stringify(error));
      return null;
    }
  },

  postReview: async (
    author: string,
    bookTitle: string,
    review: string,
    rating: number | null,
    token: string
  ): Promise<ReviewApi> => {
    const response = await axios.post(
      `${BACKEND_URL}/reviews`,
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
