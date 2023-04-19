/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getLibraries = async ({ actions, effects, state }: Context) => {
  state.library.isLoading = true;
  const response = await effects.library.api.getLibraries();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.library.getAllApi = response;
  }

  state.library.isLoading = false;
};
