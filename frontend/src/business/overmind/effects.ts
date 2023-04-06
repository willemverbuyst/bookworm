import axios, { AxiosError } from "axios";
import { AuthorApi, AuthorStatsPageApi } from "../models/Author";
import {
  BookApi,
  BookStatsGenreApi,
  BookStatsLanguageApi,
  BookStatsYearPubishedApi,
} from "../models/Book";
import { BookwormApi } from "../models/Bookworm";
import { GenreApi } from "../models/Genre";
import { LanguageApi } from "../models/Language";
import { RentalApi, RentalStatsDurationApi } from "../models/Rental";
import { ReviewApi } from "../models/Review";
import { UserApi } from "../models/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getAuthors: async ({ limit = 10, page = 1 }): Promise<AuthorApi> => {
    const response = await axios.get(
      `${BACKEND_URL}/authors/?limit=${limit}&page=${page}`
    );
    return response.data;
  },

  getAuthorStatsPages: async (): Promise<AuthorStatsPageApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/author/stats/?by=page`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getBooks: async ({
    genre,
    language,
    limit = 10,
    page = 1,
  }: {
    genre: string | null;
    language: string | null;
    limit: number;
    page: number;
  }): Promise<BookApi> => {
    try {
      let url = `${BACKEND_URL}/books/?limit=${limit}&page=${page}`;
      if (language) {
        url += `&language=${language}`;
      }

      if (genre) {
        url += `&genre=${genre}`;
      }
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getBookStatsGenres: async (): Promise<BookStatsGenreApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/books/stats/?by=genre`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getBookStatsLanguages: async (): Promise<BookStatsLanguageApi> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/books/stats/?by=language`
      );
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getBookStatsYearPublished: async (): Promise<BookStatsYearPubishedApi> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/books/stats/?by=year_published`
      );
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getBookwormById: async (id: string): Promise<Omit<UserApi, "token">> => {
    const response = await axios.get(`${BACKEND_URL}/bookworms/${id}`);
    return response.data;
  },

  getBookworms: async ({ limit = 10, page = 1 }): Promise<BookwormApi> => {
    const response = await axios.get(
      `${BACKEND_URL}/bookworms/?limit=${limit}&page=${page}`
    );
    return response.data;
  },

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
