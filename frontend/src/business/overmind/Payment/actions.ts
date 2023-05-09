import { debounce, pipe } from "overmind";

import * as o from "./operators";

export const getPayments = pipe(o.shouldFetchPayments(), o.fetchPayments());

export const showPaymentsPage = pipe(
  o.setPaymentsPage(),
  o.shouldLoadPayments(),
  o.fetchPayments()
);

export const changeLimit = pipe(o.setLimit(), o.resetQueryString());

export const changePage = pipe(o.setPage(), o.resetQueryString());

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetLimit(),
  o.resetPage()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.setLimitToTotal(),
  o.resetPage()
);

export const search = (debounce(100), o.setQueryString());
