/* eslint-disable no-param-reassign */
import { Context } from "..";

export const getBooks = async (
  { effects, state }: Context,
  {
    genre,
    language,
    limit,
    page,
  }: {
    genre: string | null;
    language: string | null;
    limit: number;
    page: number;
  }
) => {
  state.app.isLoading = true;
  const books = await effects.book.api.getBooks({
    genre,
    language,
    limit,
    page,
  });
  state.book.getAllApi = books;
  state.app.isLoading = false;
};

export const getBookStatsGenre = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const genresStats = await effects.book.api.getBookStatsGenres();
  state.book.statsGenreApi = genresStats;
  state.app.isLoading = false;
};

export const getBookStatsLanguage = async ({ effects, state }: Context) => {
  state.app.isLoading = true;
  const languagesStats = await effects.book.api.getBookStatsLanguages();
  state.book.statsLanguageApi = languagesStats;
  state.app.isLoading = false;
};

export const getBookStatsYearPublished = async ({
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const yearPublishedStats = await effects.book.api.getBookStatsYearPublished();
  state.book.statsYearPublishedApi = yearPublishedStats;
  state.app.isLoading = false;
};
