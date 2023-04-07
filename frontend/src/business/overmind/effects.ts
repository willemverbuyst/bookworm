import axios, { AxiosError } from "axios";
import { GenreApi } from "../models/Genre";
import { LanguageApi } from "../models/Language";
import { RentalApi, RentalStatsDurationApi } from "../models/Rental";
import { ReviewApi } from "../models/Review";
import { UserApi } from "../models/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getGenres: async (): Promise<GenreApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/genres`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getLanguages: async (): Promise<LanguageApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/languages`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getRentals: async ({
    limit = 10,
    page = 1,
    filter,
  }: {
    limit: number;
    page: number;
    filter: string;
  }): Promise<RentalApi> => {
    let url = `${BACKEND_URL}/rentals/?limit=${limit}&page=${page}`;

    if (filter === "returned") {
      url += "&filter=returned";
    }

    if (filter === "not_returned") {
      url += "&filter=not_returned";
    }

    const response = await axios.get(url);
    return response.data;
  },

  getRentalStatsDuration: async (): Promise<RentalStatsDurationApi> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/rentals/stats/?by=duration`
      );
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getUserByToken: async (
    token: string
  ): Promise<UserApi | AxiosError | null> => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/me`, {
        token,
      });
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

  getUser: async (
    email: string,
    password: string
  ): Promise<UserApi | AxiosError | null> => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        email,
        password,
      });
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
