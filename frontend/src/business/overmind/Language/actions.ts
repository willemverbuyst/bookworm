/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getLanguages = async ({ actions, effects, state }: Context) => {
  state.app.isLoading = true;
  const response = await effects.language.api.getLanguages();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.language.getAllApi = response;
  }

  state.app.isLoading = false;
};
