import { apiGet } from "../../../api/apiGet";

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

    return apiGet({ url });
  },

  getBookStatsGenres: () => apiGet({ url: "books/stats/?by=genre" }),

  getBookStatsLanguages: () => apiGet({ url: "books/stats/?by=language" }),

  getBookStatsYearPublished: () =>
    apiGet({ url: "books/stats/?by=year_published" }),
};
