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

export const setLimit = (
  { actions, state }: Context,
  { limit }: { limit: number }
) => {
  const { showAll, page } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.limit = limit;

  if (showAll && total) {
    actions.bookworm.getBookworms({ limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ limit, page });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};

export const setPage = (
  { actions, state }: Context,
  { page }: { page: number }
) => {
  const { showAll, limit } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.page = page;

  if (showAll && total) {
    actions.bookworm.getBookworms({ limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ limit, page });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};

export const setQueryString = (
  { state }: Context,
  { queryString }: { queryString: string }
) => {
  state.bookworm.ui.table.queryString = queryString;
};

export const setShowAll = (
  { actions, state }: Context,
  { showAll }: { showAll: boolean }
) => {
  const { limit, page } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.showAll = showAll;

  if (showAll && total) {
    actions.bookworm.getBookworms({ limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ limit, page });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};
