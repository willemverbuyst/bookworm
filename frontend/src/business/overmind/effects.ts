import axios from "axios";
import { AuthorApi, AuthorStatsPageApi } from "../models/Author";
import {
  BookApi,
  BookStatsGenreApi,
  BookStatsLanguageApi,
} from "../models/Book";
import { GenreApi } from "../models/Genre";
import { LanguageApi } from "../models/Language";
import { ReviewApi } from "../models/ReviewApi";
import { UserApi } from "../models/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getAllAuthors: async (): Promise<AuthorApi> => {
    const response = await axios.get(`${BACKEND_URL}/authors`);
    return response.data;
  },

  getAllBooks: async ({
    genre,
    language,
  }: {
    genre: string;
    language: string;
  }): Promise<BookApi> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/books/?genre=${genre}&language=${language}`
      );
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getAllGenres: async (): Promise<GenreApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/genres`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getAllLanguages: async (): Promise<LanguageApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/languages`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getStatsAuthorPages: async (): Promise<AuthorStatsPageApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/author/stats/?by=page`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getStatsBooksLanguages: async (): Promise<BookStatsLanguageApi> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/books/stats/?by=language`
      );
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },

  getStatsBooksGenres: async (): Promise<BookStatsGenreApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/books/stats/?by=genre`);
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
