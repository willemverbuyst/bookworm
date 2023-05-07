import { pipe } from "overmind";
import { Context } from "..";
import { Page } from "../../models";

import * as o from "./operators";

export const getPayments = pipe(o.shouldFetchPayments(), o.fetchPayments());

export const showPaymentPage = ({ state }: Context) => {
  // eslint-disable-next-line no-param-reassign
  state.app.currentPage = Page.PAYMENTS;
};
