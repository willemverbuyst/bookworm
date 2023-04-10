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

export const setFilter = (
  { actions, state }: Context,
  { filter }: { filter: string }
) => {
  const { limit, showAll } = state.rental.ui.table;
  const { total } = state.rental.getAllApi || {};

  state.rental.ui.table.filter = filter;
  state.rental.ui.table.page = 1;

  if (showAll && total) {
    actions.rental.getRentals({
      filter: "",
      limit: total,
      page: 1,
    });
    actions.rental.setQueryString({ queryString: "" });
  } else {
    actions.rental.getRentals({ filter, limit, page: 1 });
    actions.rental.setQueryString({ queryString: "" });
  }
};

export const setLimit = (
  { actions, state }: Context,
  { limit }: { limit: number }
) => {
  const { filter, page, showAll } = state.rental.ui.table;
  const { total } = state.rental.getAllApi || {};

  state.rental.ui.table.limit = limit;

  if (showAll && total) {
    actions.rental.getRentals({
      filter: "",
      limit: total,
      page: 1,
    });
    actions.rental.setQueryString({ queryString: "" });
  } else {
    actions.rental.getRentals({ filter, limit, page });
    actions.rental.setQueryString({ queryString: "" });
  }
};

export const setPage = (
  { actions, state }: Context,
  { page }: { page: number }
) => {
  const { filter, limit, showAll } = state.rental.ui.table;
  const { total } = state.book.getAllApi || {};

  state.rental.ui.table.page = page;

  if (showAll && total) {
    actions.rental.getRentals({
      filter: "",
      limit: total,
      page: 1,
    });
    actions.rental.setQueryString({ queryString: "" });
  } else {
    actions.rental.getRentals({ filter, limit, page });
    actions.rental.setQueryString({ queryString: "" });
  }
};

export const setQueryString = (
  { state }: Context,
  { queryString }: { queryString: string }
) => {
  state.rental.ui.table.queryString = queryString;
};

export const setShowAll = (
  { actions, state }: Context,
  { showAll }: { showAll: boolean }
) => {
  const { filter, limit, page } = state.rental.ui.table;
  const { total } = state.rental.getAllApi || {};

  state.rental.ui.table.showAll = showAll;

  if (showAll && total) {
    actions.rental.getRentals({
      filter: "",
      limit: total,
      page: 1,
    });
    actions.rental.setQueryString({ queryString: "" });
  } else {
    actions.rental.getRentals({ filter, limit, page });
    actions.rental.setQueryString({ queryString: "" });
  }
};
