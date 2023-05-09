/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Page } from "../../models";

export const shouldFetchPayments = () =>
  filter(({ state }: Context) => !state.payment.getAllApi?.data.length);

export const fetchPayments =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.payment.isLoading = true;
    const response = await effects.payment.api.getPayments();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.payment.getAllApi = response;
    }

    state.payment.isLoading = false;
  };

export const setPaymentsPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.PAYMENTS;
  };

export const shouldLoadPayments = () =>
  filter(({ state }: Context) => {
    return !state.payment.getAllApi?.data.length;
  });

export const setLimit =
  () =>
  ({ state }: Context, { limit }: { limit: number }) => {
    state.payment.ui.table.limit = limit;
  };

export const resetLimit =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.limit = 10;
  };

export const setLimitToTotal =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.limit =
      state.payment.getAllApi?.total || state.payment.ui.table.limit;
  };

export const setPage =
  () =>
  ({ state }: Context, { page }: { page: number }) => {
    state.payment.ui.table.page = page;
  };

export const resetPage =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.page = 1;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.payment.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.queryString = "";
  };

export const setShowAll =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.showAll = true;
  };

export const setPagination =
  () =>
  ({ state }: Context) => {
    state.payment.ui.table.showAll = false;
  };

export const shouldShowAll = () =>
  filter(({ state }: Context) => {
    return Boolean(
      state.payment.ui.table.showAll && state.payment.getAllApi?.total
    );
  });
