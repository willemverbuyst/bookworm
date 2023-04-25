/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";

export const shouldFetchLanguages = () =>
  filter(({ state }: Context) => !state.language.getAllApi?.data.length);

export const fetchLanguages =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.language.isLoading = true;
    const response = await effects.language.api.getLanguages();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.language.getAllApi = response;
    }

    state.language.isLoading = false;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.language.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.language.ui.table.queryString = "";
  };

export const addLanguage =
  () =>
  async (
    { actions, state, effects }: Context,
    { language }: { language: string }
  ) => {
    state.language.isLoading = true;
    const { token } = state.auth;
    const response = await effects.language.api.postLanguage({
      language,
      token,
    });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.language.getAllApi = response;
    }

    state.language.isLoading = false;
  };

export const deleteLanguage =
  () =>
  async ({ actions, effects, state }: Context, { id }: { id: string }) => {
    state.language.isLoading = true;
    const response = await effects.language.api.deleteLanguage({ id });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.language.getAllApi = response;
    }

    state.language.isLoading = false;
  };
