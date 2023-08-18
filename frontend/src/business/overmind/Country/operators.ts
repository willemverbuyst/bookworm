/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";

export const shoulLoadCountries = filter(
  ({ state }: Context) => !state.country.getAllApi?.data.length
);

export const fetchCountries = async ({ actions, effects, state }: Context) => {
  state.country.isLoading = true;
  const response = await effects.country.api.getCountries();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.country.getAllApi = response;
  }

  state.country.isLoading = false;
};
