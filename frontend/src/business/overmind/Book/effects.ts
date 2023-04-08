import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import {
  Book,
  BookStatsGenre,
  BookStatsLanguage,
  BookStatsYearPublished,
} from "../../models/Book";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
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
  }): Promise<ApiResponse<Array<Book>>> => {
    let url = `${BACKEND_URL}/books/?limit=${limit}&page=${page}`;
    if (language) {
      url += `&language=${language}`;
    }

    if (genre) {
      url += `&genre=${genre}`;
    }

    const response = await axiosGet({ url });
    return response;
  },

  getBookStatsGenres: async (): Promise<ApiResponse<Array<BookStatsGenre>>> => {
    const url = `${BACKEND_URL}/books/stats/?by=genre`;

    const response = await axiosGet({ url });
    return response;
  },

  getBookStatsLanguages: async (): Promise<
    ApiResponse<Array<BookStatsLanguage>>
  > => {
    const url = `${BACKEND_URL}/books/stats/?by=language`;

    const response = await axiosGet({ url });
    return response;
  },

  getBookStatsYearPublished: async (): Promise<
    ApiResponse<Array<BookStatsYearPublished>>
  > => {
    const url = `${BACKEND_URL}/books/stats/?by=year_published`;

    const response = await axiosGet({ url });
    return response;
  },
};
