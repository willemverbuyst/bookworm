import { debounce, filter, parallel, pipe } from "overmind";
import {
  getRentals,
  getRentalStatsDay,
  getRentalStatsDuration,
  resetColumnQueryString,
  resetLimit,
  resetPage,
  resetQueryString,
  resetReturnedFilter,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setQueryString,
  setRentalsPage,
  setReturnedFilter,
  setShowAll,
  setShowInput,
  shouldLoadRentals,
  shouldResetQueryString,
} from "./operators";

export { setColumnQueryString, setSort } from "./operators";

export const showRentalsPage = pipe(
  setRentalsPage,
  shouldLoadRentals,
  parallel(getRentals, getRentalStatsDay, getRentalStatsDuration)
);

export const changeLimit = pipe(setLimit, resetQueryString, getRentals);

export const changePage = pipe(setPage, resetQueryString, getRentals);

export const changeReturnedFilter = pipe(
  setReturnedFilter,
  resetQueryString,
  getRentals
);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetReturnedFilter,
  resetLimit,
  resetPage,
  getRentals
);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  resetReturnedFilter,
  setLimitToTotal,
  resetPage,
  getRentals
);

export const search = (debounce(100), setQueryString);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
