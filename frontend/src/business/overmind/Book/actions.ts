/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getBooks = async (
  { actions, effects, state }: Context,
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
  const response = await effects.book.api.getBooks({
    genre,
    language,
    limit,
    page,
  });

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.book.getAllApi = response;
  }

  state.app.isLoading = false;
};

export const getBookStatsGenre = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const response = await effects.book.api.getBookStatsGenres();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.book.statsGenreApi = response;
  }

  state.app.isLoading = false;
};

export const getBookStatsLanguage = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const response = await effects.book.api.getBookStatsLanguages();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.book.statsLanguageApi = response;
  }

  state.app.isLoading = false;
};

export const getBookStatsYearPublished = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const response = await effects.book.api.getBookStatsYearPublished();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.book.statsYearPublishedApi = response;
  }

  state.app.isLoading = false;
};
