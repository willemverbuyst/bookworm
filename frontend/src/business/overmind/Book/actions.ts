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

export const setGenreFilter = (
  { actions, state }: Context,
  { genre }: { genre: string }
) => {
  const {
    filter: { language },
    limit,
    showAll,
  } = state.book.ui.table;
  const { total } = state.book.getAllApi || {};

  state.book.ui.table.filter.genre = genre;
  state.book.ui.table.page = 1;

  if (showAll && total) {
    actions.book.getBooks({
      genre: null,
      language: null,
      limit: total,
      page: 1,
    });
    actions.book.setQueryString({ queryString: "" });
  } else {
    actions.book.getBooks({ genre, language, limit, page: 1 });
    actions.book.setQueryString({ queryString: "" });
  }
};

export const setLanguageFilter = (
  { actions, state }: Context,
  { language }: { language: string }
) => {
  const {
    filter: { genre },
    limit,
    showAll,
  } = state.book.ui.table;
  const { total } = state.book.getAllApi || {};

  state.book.ui.table.filter.language = language;
  state.book.ui.table.page = 1;

  if (showAll && total) {
    actions.book.getBooks({
      genre: null,
      language: null,
      limit: total,
      page: 1,
    });
    actions.book.setQueryString({ queryString: "" });
  } else {
    actions.book.getBooks({ genre, language, limit, page: 1 });
    actions.book.setQueryString({ queryString: "" });
  }
};

export const setLimit = (
  { actions, state }: Context,
  { limit }: { limit: number }
) => {
  const {
    filter: { genre, language },
    showAll,
    page,
  } = state.book.ui.table;
  const { total } = state.book.getAllApi || {};

  state.book.ui.table.limit = limit;

  if (showAll && total) {
    actions.book.getBooks({
      genre: null,
      language: null,
      limit: total,
      page: 1,
    });
    actions.book.setQueryString({ queryString: "" });
  } else {
    actions.book.getBooks({ genre, language, limit, page });
    actions.book.setQueryString({ queryString: "" });
  }
};

export const setPage = (
  { actions, state }: Context,
  { page }: { page: number }
) => {
  const {
    filter: { genre, language },
    limit,
    showAll,
  } = state.book.ui.table;
  const { total } = state.book.getAllApi || {};

  state.book.ui.table.page = page;

  if (showAll && total) {
    actions.book.getBooks({
      genre: null,
      language: null,
      limit: total,
      page: 1,
    });
    actions.book.setQueryString({ queryString: "" });
  } else {
    actions.book.getBooks({ genre, language, limit, page });
    actions.book.setQueryString({ queryString: "" });
  }
};

export const setQueryString = (
  { state }: Context,
  { queryString }: { queryString: string }
) => {
  state.book.ui.table.queryString = queryString;
};

export const setShowAll = (
  { actions, state }: Context,
  { showAll }: { showAll: boolean }
) => {
  const {
    filter: { genre, language },
    limit,
    page,
  } = state.book.ui.table;
  const { total } = state.book.getAllApi || {};

  state.book.ui.table.showAll = showAll;

  if (showAll && total) {
    actions.book.getBooks({
      genre: null,
      language: null,
      limit: total,
      page: 1,
    });
    actions.book.setQueryString({ queryString: "" });
  } else {
    actions.book.getBooks({ genre, language, limit, page });
    actions.book.setQueryString({ queryString: "" });
  }
};
