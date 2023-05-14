/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Library, SortDirection } from "../../models";

export const shouldFetchLibraries = () =>
  filter(({ state }: Context) => !state.library.getAllApi?.data.length);

export const fetchLibraries =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.library.isLoading = true;
    const response = await effects.library.api.getLibraries();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.library.getAllApi = response;
    }

    state.library.isLoading = false;
  };

export const getLibraryById =
  () =>
  async ({ actions, effects, state }: Context, { id }: { id: string }) => {
    state.library.isLoading = true;
    const response = await effects.library.api.getLibraryById(id);

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.library.detailsApi = response;
    }

    state.library.isLoading = false;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.library.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.library.ui.table.queryString = "";
  };

export const setSort =
  () =>
  (
    { state }: Context,
    {
      property,
      sortDirection,
    }: { property: keyof Library; sortDirection: keyof typeof SortDirection }
  ) => {
    state.library.ui.table.sort = { property, sortDirection };
  };

export const setColumnQueryString =
  () =>
  (
    { state }: Context,
    { field, queryString }: { field: keyof Library; queryString: string }
  ) => {
    const column = state.library.ui.table.columns[field];

    column.queryString = queryString;
  };

export const setShowInput =
  () =>
  ({ state }: Context, { field }: { field: keyof Library }) => {
    const column = state.library.ui.table.columns[field];

    column.showInput = !column.showInput;

    if (!column.showInput) {
      state.library.ui.table.columns[field].queryString = "";
    }
  };
