import { filter, pipe } from "overmind";
import {
  fetchPayments,
  resetAmountFilter,
  resetColumnQueryString,
  resetLimit,
  resetPage,
  resetQueryString,
  setAmountFilter,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setPaymentsPage,
  setQueryString,
  setShowAll,
  setShowInput,
  shouldFetchPayments,
  shouldLoadPayments,
  shouldResetQueryString,
} from "./operators";

export { setColumnQueryString, setSort } from "./operators";

export const getPayments = pipe(shouldFetchPayments, fetchPayments);

export const showPaymentsPage = pipe(
  setPaymentsPage,
  shouldLoadPayments,
  fetchPayments
);

export const changeLimit = pipe(setLimit, resetQueryString);

export const changePage = pipe(setPage, resetQueryString);

export const changeAmountFilter = pipe(
  setAmountFilter,
  resetQueryString,
  fetchPayments
);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetAmountFilter,
  resetLimit,
  resetPage
);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  resetAmountFilter,
  setLimitToTotal,
  resetPage
);

export const search = setQueryString;

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
