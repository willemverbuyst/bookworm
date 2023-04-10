/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { Context } from "..";

export const getBookworms = async (
  { actions, effects, state }: Context,
  { filter, limit, page }: { filter: boolean; limit: number; page: number }
) => {
  state.app.isLoading = true;
  const response = await effects.bookworm.api.getBookworms({
    filter,
    limit,
    page,
  });

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

export const setActiveFilter = (
  { actions, state }: Context,
  { active }: { active: boolean }
) => {
  const { limit, showAll } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.filter.active = active;
  state.bookworm.ui.table.page = 1;

  if (showAll && total) {
    actions.bookworm.getBookworms({
      filter: true,
      limit: total,
      page: 1,
    });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ filter: active, limit, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};

export const setLimit = (
  { actions, state }: Context,
  { limit }: { limit: number }
) => {
  const {
    filter: { active },
    page,
    showAll,
  } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.limit = limit;

  if (showAll && total) {
    actions.bookworm.getBookworms({ filter: true, limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ filter: active, limit, page });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};

export const setPage = (
  { actions, state }: Context,
  { page }: { page: number }
) => {
  const {
    filter: { active },
    limit,
    showAll,
  } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.page = page;

  if (showAll && total) {
    actions.bookworm.getBookworms({ filter: true, limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ filter: active, limit, page });
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
  const {
    filter: { active },
    limit,
    page,
  } = state.bookworm.ui.table;
  const { total } = state.bookworm.getAllApi || {};

  state.bookworm.ui.table.showAll = showAll;

  if (showAll && total) {
    actions.bookworm.getBookworms({ filter: true, limit: total, page: 1 });
    actions.bookworm.setQueryString({ queryString: "" });
  } else {
    actions.bookworm.getBookworms({ filter: active, limit, page });
    actions.bookworm.setQueryString({ queryString: "" });
  }
};
