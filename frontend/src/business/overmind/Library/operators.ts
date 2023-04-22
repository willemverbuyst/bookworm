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
