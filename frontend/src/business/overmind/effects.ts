import axios from "axios";
import { AuthorApi, AuthorStatsPageApi } from "../models/Author";
import {
  BookApi,
  BookStatsGenreApi,
  BookStatsLanguageApi,
} from "../models/Book";
import { BookwormApi } from "../models/Bookworm";
import { GenreApi } from "../models/Genre";
import { LanguageApi } from "../models/Language";
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
