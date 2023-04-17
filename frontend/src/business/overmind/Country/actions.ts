/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getCountries = async ({ actions, effects, state }: Context) => {
  state.app.isLoading = true;
  const response = await effects.country.api.getCountries();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.genre.getAllApi = response;
  }

  state.app.isLoading = false;
};
