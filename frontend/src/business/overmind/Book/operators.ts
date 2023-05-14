/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Book, Page, SortDirection } from "../../models";

export const setBooksPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.BOOKS;
  };

export const shouldLoadBooks = () =>
  filter(({ state }: Context) => {
    return !state.book.getAllApi?.data.length;
  });

export const getBooks =
  () =>
  async ({ actions, effects, state }: Context) => {
    const {
      filter: { genre, language },
      limit,
      page,
    } = state.book.ui.table;
    state.book.isLoading = true;
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

    state.book.isLoading = false;
  };

export const getBookStatsGenre =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.book.isLoading = true;
    const response = await effects.book.api.getBookStatsGenres();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.book.statsGenreApi = response;
    }

    state.book.isLoading = false;
  };

export const getBookStatsLanguage =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.book.isLoading = true;
    const response = await effects.book.api.getBookStatsLanguages();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.book.statsLanguageApi = response;
    }

    state.book.isLoading = false;
  };

export const getBookStatsYearPublished =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.book.isLoading = true;
    const response = await effects.book.api.getBookStatsYearPublished();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.book.statsYearPublishedApi = response;
    }

    state.book.isLoading = false;
  };

export const setLimit =
  () =>
  ({ state }: Context, { limit }: { limit: number }) => {
    state.book.ui.table.limit = limit;
  };

export const resetLimit =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.limit = 10;
  };

export const setLimitToTotal =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.limit =
      state.book.getAllApi?.total || state.book.ui.table.limit;
  };

export const setPage =
  () =>
  ({ state }: Context, { page }: { page: number }) => {
    state.book.ui.table.page = page;
  };

export const resetPage =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.page = 1;
  };

export const setLanguageFilter =
  () =>
  ({ state }: Context, { language }: { language: string }) => {
    state.book.ui.table.filter.language = language;
  };

export const resetLanguage =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.filter.language = "";
  };

export const setGenreFilter =
  () =>
  ({ state }: Context, { genre }: { genre: string }) => {
    state.book.ui.table.filter.genre = genre;
  };

export const resetGenre =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.filter.genre = "";
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.book.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.queryString = "";
  };

export const setShowAll =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.showAll = true;
  };

export const setPagination =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.showAll = false;
  };

export const shouldShowAll = () =>
  filter(({ state }: Context) => {
    return Boolean(
      state.book.ui.table.showAll && state.author.getAllApi?.total
    );
  });

export const getGenres =
  () =>
  ({ actions }: Context) => {
    actions.genre.getGenres();
  };

export const getLanguages =
  () =>
  ({ actions }: Context) => {
    actions.language.getLanguages();
  };

export const setSort =
  () =>
  (
    { state }: Context,
    {
      property,
      sortDirection,
    }: { property: keyof Book; sortDirection: keyof typeof SortDirection }
  ) => {
    state.book.ui.table.sort = { property, sortDirection };
  };

export const setColumnQueryString =
  () =>
  (
    { state }: Context,
    { field, queryString }: { field: keyof Book; queryString: string }
  ) => {
    const column = state.book.ui.table.columns[field];

    column.queryString = queryString;
  };

export const setShowInput =
  () =>
  ({ state }: Context, { field }: { field: keyof Book }) => {
    const column = state.book.ui.table.columns[field];

    column.showInput = !column.showInput;

    if (!column.showInput) {
      state.book.ui.table.columns[field].queryString = "";
    }
  };
