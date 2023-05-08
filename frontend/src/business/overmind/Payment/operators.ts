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

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.payment.queryString = queryString;
  };
