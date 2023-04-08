/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getAuthors = async (
  { actions, effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  state.app.isLoading = true;
  const response = await effects.author.api.getAuthors({ limit, page });

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.author.getAllApi = response;
  }

  state.app.isLoading = false;
};

export const getAuthorStatsPage = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.app.isLoading = true;
  const response = await effects.author.api.getAuthorStatsPages();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.author.statsPageApi = response;
  }

  state.app.isLoading = false;
};
