/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Page } from "../../models";

export const setRentalsPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.RENTALS;
  };

export const shouldLoadRentals = () =>
  filter(({ state }: Context) => {
    return !state.rental.getAllApi?.data.length;
  });

export const getRentals =
  () =>
  async ({ actions, effects, state }: Context) => {
    const {
      limit,
      page,
      filter: { returned },
    } = state.rental.ui.table;
    state.rental.isLoading = true;
    const response = await effects.rental.api.getRentals({
      limit,
      page,
      returned,
    });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.rental.getAllApi = response;
    }

    state.rental.isLoading = false;
  };

export const getRentalStatsDay =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.rental.isLoading = true;
    const response = await effects.rental.api.getRentalStatsDay();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.rental.statsDayApi = response;
    }

    state.rental.isLoading = false;
  };

export const getRentalStatsDuration =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.rental.isLoading = true;
    const response = await effects.rental.api.getRentalStatsDuration();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.rental.statsDurationApi = response;
    }

    state.rental.isLoading = false;
  };

export const setLimit =
  () =>
  ({ state }: Context, { limit }: { limit: number }) => {
    state.rental.ui.table.limit = limit;
  };

export const resetLimit =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.limit = 10;
  };

export const setLimitToTotal =
  () =>
  ({ state }: Context) => {
    state.book.ui.table.limit =
      state.book.getAllApi?.total || state.book.ui.table.limit;
  };

export const setPage =
  () =>
  ({ state }: Context, { page }: { page: number }) => {
    state.rental.ui.table.page = page;
  };

export const resetPage =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.page = 1;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.rental.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.queryString = "";
  };

export const setShowAll =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.showAll = true;
  };

export const setPagination =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.showAll = false;
  };

export const shouldShowAll = () =>
  filter(({ state }: Context) => {
    return Boolean(
      state.rental.ui.table.showAll && state.author.getAllApi?.total
    );
  });

export const setReturnedFilter =
  () =>
  ({ state }: Context, { returned }: { returned: string }) => {
    state.rental.ui.table.filter.returned = returned;
  };

export const resetReturnedFilter =
  () =>
  ({ state }: Context) => {
    state.rental.ui.table.filter.returned = "";
  };
