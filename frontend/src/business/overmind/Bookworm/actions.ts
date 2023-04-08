/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getBookworms = async (
  { actions, effects, state }: Context,
  { limit, page }: { limit: number; page: number }
) => {
  state.app.isLoading = true;
  const response = await effects.bookworm.api.getBookworms({ limit, page });

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.bookworm.getAllApi = response;
  }

  state.app.isLoading = false;
};

export const getBookWormById = async (
  { actions, effects, state }: Context,
  { id }: { id: string }
) => {
  state.app.isLoading = true;
  const response = await effects.bookworm.api.getBookwormById(id);

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.bookworm.bookwormDetailsApi = response;
  }

  state.app.isLoading = false;
};
