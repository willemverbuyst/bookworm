import axios from "axios";
import { AuthorApi } from "../models/Author";
import { BookApi } from "../models/Book";
import { ReviewApi } from "../models/ReviewApi";
import { UserApi } from "../models/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getAllAuthors: async (): Promise<AuthorApi> => {
    const response = await axios.get(`${BACKEND_URL}/authors`);
    return response.data;
  },

  getAllBooks: async (): Promise<BookApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/books`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getUser: async (email: string, password: string): Promise<UserApi> => {
    const response = await axios.post(`${BACKEND_URL}/user/login`, {
      email,
      password,
    });
    return response.data;
  },

  getUserByToken: async (token: string): Promise<UserApi> => {
    const response = await axios.post(`${BACKEND_URL}/user/me`, {
      token,
    });
    return response.data;
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
