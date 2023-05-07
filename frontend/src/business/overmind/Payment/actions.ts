import { pipe } from "overmind";

import * as o from "./operators";

export const getPayments = pipe(o.shouldFetchPayments(), o.fetchPayments());

export const showPaymentsPage = pipe(
  o.setPaymentsPage(),
  o.shouldLoadPayments(),
  o.fetchPayments()
);