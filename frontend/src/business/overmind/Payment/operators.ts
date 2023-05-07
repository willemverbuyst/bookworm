/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";

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
