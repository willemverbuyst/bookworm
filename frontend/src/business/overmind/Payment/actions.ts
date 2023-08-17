import { filter, pipe } from "overmind";

import * as o from "./operators";

export const getPayments = pipe(o.shouldFetchPayments(), o.fetchPayments());

export const showPaymentsPage = pipe(
  o.setPaymentsPage(),
  o.shouldLoadPayments(),
  o.fetchPayments()
);

export const changeLimit = pipe(o.setLimit(), o.resetQueryString());

export const changePage = pipe(o.setPage(), o.resetQueryString());

export const changeAmountFilter = pipe(
  o.setAmountFilter(),
  o.resetQueryString(),
  o.fetchPayments()
);

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetAmountFilter(),
  o.resetLimit(),
  o.resetPage()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.resetAmountFilter(),
  o.setLimitToTotal(),
  o.resetPage()
);

export const setSort = o.setSort();

export const search = o.setQueryString();

export const setColumnQueryString = o.setColumnQueryString();

export const updateShowInput = pipe(
  o.setShowInput(),
  filter(o.shouldResetQueryString()),
  o.resetColumnQueryString()
);
