/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getRentals = async (
  { actions, effects, state }: Context,
  { limit, page, filter }: { limit: number; page: number; filter: string }
) => {
  state.app.isLoading = true;
  const response = await effects.rental.api.getRentals({ limit, page, filter });

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.rental.getAllApi = response;
  }

  state.app.isLoading = false;
};

export const getRentalStatsDuration = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const response = await effects.rental.api.getRentalStatsDuration();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.rental.statsDurationApi = response;
  }

  state.app.isLoading = false;
};
