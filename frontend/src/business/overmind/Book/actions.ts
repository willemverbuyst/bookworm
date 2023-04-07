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
  const books = await effects.book.api.getBooks({
    genre,
    language,
    limit,
    page,
  });
  state.book.booksApi = books;
};

export const getBookStatsGenre = async ({ effects, state }: Context) => {
  const genresStats = await effects.book.api.getBookStatsGenres();
  state.book.bookStatsGenreApi = genresStats;
};

export const getBookStatsLanguage = async ({ effects, state }: Context) => {
  const languagesStats = await effects.book.api.getBookStatsLanguages();
  state.book.bookStatsLanguageApi = languagesStats;
};

export const getBookStatsYearPublished = async ({
  effects,
  state,
}: Context) => {
  const yearPublishedStats = await effects.book.api.getBookStatsYearPublished();
  state.book.bookStatsYearPublishedApi = yearPublishedStats;
};
