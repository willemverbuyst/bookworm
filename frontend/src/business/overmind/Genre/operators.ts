/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Genre, SortDirection } from "../../models";

export const shouldFetchGenres = () =>
  filter(({ state }: Context) => !state.genre.getAllApi?.data.length);

export const fetchGenres =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.genre.isLoading = true;
    const response = await effects.genre.api.getGenres();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.genre.getAllApi = response;
    }

    state.genre.isLoading = false;
  };

export const addGenres =
  () =>
  async (
    { actions, state, effects }: Context,
    { genres }: { genres: { name: string }[] }
  ) => {
    state.genre.isLoading = true;
    const { token } = state.auth;
    const response = await effects.genre.api.postGenres({
      genres,
      token,
    });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.genre.getAllApi = response;
    }

    state.genre.isLoading = false;
  };

export const deleteGenre =
  () =>
  async ({ actions, effects, state }: Context, { id }: { id: string }) => {
    state.genre.isLoading = true;
    const response = await effects.genre.api.deleteGenre({ id });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.api.response = {
        message: response.message,
        status: "success",
      };
    }

    state.genre.isLoading = false;
  };

export const updateGenre =
  () =>
  async (
    { actions, state, effects }: Context,
    { id, name }: { id: string; name: string }
  ) => {
    state.genre.isLoading = true;
    const { token } = state.auth;
    const response = await effects.genre.api.putGenre({
      id,
      name,
      token,
    });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.api.response = {
        message: response.message,
        status: "success",
      };
    }

    state.genre.isLoading = false;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.genre.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.queryString = "";
  };

export const setLimit =
  () =>
  ({ state }: Context, { limit }: { limit: number }) => {
    state.genre.ui.table.limit = limit;
  };

export const resetLimit =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.limit = 10;
  };

export const setLimitToTotal =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.limit =
      state.genre.getAllApi?.total || state.genre.ui.table.limit;
  };

export const setPage =
  () =>
  ({ state }: Context, { page }: { page: number }) => {
    state.genre.ui.table.page = page;
  };

export const resetPage =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.page = 1;
  };

export const setShowAll =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.showAll = true;
  };

export const setPagination =
  () =>
  ({ state }: Context) => {
    state.genre.ui.table.showAll = false;
  };

export const shouldShowAll = () =>
  filter(({ state }: Context) => {
    return Boolean(
      state.genre.ui.table.showAll && state.author.getAllApi?.total
    );
  });

export const setSort =
  () =>
  (
    { state }: Context,
    {
      property,
      sortDirection,
    }: { property: keyof Genre; sortDirection: keyof typeof SortDirection }
  ) => {
    state.genre.ui.table.sort = { property, sortDirection };
  };

export const setColumnQueryString =
  () =>
  (
    { state }: Context,
    { field, queryString }: { field: keyof Genre; queryString: string }
  ) => {
    const column = state.genre.ui.table.columns[field];

    column.queryString = queryString;
  };

export const resetColumnQueryString =
  () =>
  ({ state }: Context, { field }: { field: keyof Genre }) => {
    const column = state.genre.ui.table.columns[field];

    column.queryString = "";
  };

export const setShowInput =
  () =>
  ({ state }: Context, { field }: { field: keyof Genre }) => {
    const column = state.genre.ui.table.columns[field];

    column.showInput = !column.showInput;

    return { field };
  };

export const shouldResetQueryString =
  () =>
  ({ state }: Context, { field }: { field: keyof Genre }) => {
    const column = state.genre.ui.table.columns[field];

    return !column.showInput;
  };
