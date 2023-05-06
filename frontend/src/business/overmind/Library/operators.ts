/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";

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
