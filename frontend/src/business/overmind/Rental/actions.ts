import { debounce, parallel, pipe } from "overmind";
import * as o from "./operators";

export const showRentalsPage = pipe(
  o.setRentalsPage(),
  o.shouldLoadRentals(),
  parallel(o.getRentals(), o.getRentalStatsDay(), o.getRentalStatsDuration())
);

export const changeLimit = pipe(
  o.setLimit(),
  o.resetQueryString(),
  o.getRentals()
);

export const changePage = pipe(
  o.setPage(),
  o.resetQueryString(),
  o.getRentals()
);

export const changeReturnedFilter = pipe(
  o.setReturnedFilter(),
  o.resetQueryString(),
  o.getRentals()
);

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetReturnedFilter(),
  o.resetLimit(),
  o.resetPage(),
  o.getRentals()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.resetReturnedFilter(),
  o.setLimitToTotal(),
  o.resetPage(),
  o.getRentals()
);

export const search = (debounce(100), o.setQueryString());
