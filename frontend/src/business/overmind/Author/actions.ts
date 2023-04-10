/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { debounce, pipe } from "overmind";
import { Context } from "..";
import * as o from "./operators";

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

export const setLimit = (
  { actions, state }: Context,
  { limit }: { limit: number }
) => {
  const { showAll, page } = state.author.ui.table;
  const { total } = state.author.getAllApi || {};

  state.author.ui.table.limit = limit;

  if (showAll && total) {
    actions.author.getAuthors({ limit: total, page: 1 });
    actions.author.setQueryString({ queryString: "" });
  } else {
    actions.author.getAuthors({ limit, page });
    actions.author.setQueryString({ queryString: "" });
  }
};

export const setPage = (
  { actions, state }: Context,
  { page }: { page: number }
) => {
  const { showAll, limit } = state.author.ui.table;
  const { total } = state.author.getAllApi || {};

  state.author.ui.table.page = page;

  if (showAll && total) {
    actions.author.getAuthors({ limit: total, page: 1 });
    actions.author.setQueryString({ queryString: "" });
  } else {
    actions.author.getAuthors({ limit, page });
    actions.author.setQueryString({ queryString: "" });
  }
};

export const setQueryString = (
  { state }: Context,
  { queryString }: { queryString: string }
) => {
  state.author.ui.table.queryString = queryString;
};

export const setShowAll = (
  { actions, state }: Context,
  { showAll }: { showAll: boolean }
) => {
  const { limit, page } = state.author.ui.table;
  const { total } = state.author.getAllApi || {};

  state.author.ui.table.showAll = showAll;

  if (showAll && total) {
    actions.author.getAuthors({ limit: total, page: 1 });
    actions.author.setQueryString({ queryString: "" });
  } else {
    actions.author.getAuthors({ limit, page });
    actions.author.setQueryString({ queryString: "" });
  }
};

export const search = pipe(debounce(200), o.searching);
