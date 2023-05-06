import { apiGetWithZod } from "../../../api";
import {
  ApiResponseBook,
  ApiResponseBookStatsGenre,
  ApiResponseBookStatsLanguage,
  ApiResponseBookStatsYearPublished,
} from "../../models";

export const api = {
  getBooks: ({
    genre,
    language,
    limit = 10,
    page = 1,
  }: {
    genre: string | null;
    language: string | null;
    limit: number;
    page: number;
  }) => {
    let url = `books/?limit=${limit}&page=${page}`;
    if (language) {
      url += `&language=${language}`;
    }

    if (genre) {
      url += `&genre=${genre}`;
    }

    return apiGetWithZod(url, ApiResponseBook);
  },

  getBookStatsGenres: () =>
    apiGetWithZod("books/stats/?by=genre", ApiResponseBookStatsGenre),

  getBookStatsLanguages: () =>
    apiGetWithZod("books/stats/?by=language", ApiResponseBookStatsLanguage),

  getBookStatsYearPublished: () =>
    apiGetWithZod(
      "books/stats/?by=year_published",
      ApiResponseBookStatsYearPublished
    ),
};
