import axios, { AxiosError } from "axios";
import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import { Review } from "../../models/Review";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getReviews: async ({
    limit = 10,
    page = 1,
  }): Promise<ApiResponse<Array<Review>> | AxiosError | null> => {
    const url = `${BACKEND_URL}/reviews/?limit=${limit}&page=${page}`;
    const response = await axiosGet({ url });
    return response;
  },

  postReview: async (
    author: string,
    bookTitle: string,
    review: string,
    rating: number | null,
    token: string
  ): Promise<ApiResponse<Array<Review>>> => {
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
