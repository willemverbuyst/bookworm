/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";

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
