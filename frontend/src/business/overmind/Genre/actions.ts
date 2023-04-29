import { debounce, pipe } from "overmind";
import * as o from "./operators";

export const getGenres = pipe(o.shouldFetchGenres(), o.fetchGenres());

export const changeLimit = pipe(
  o.setLimit(),
  o.resetQueryString(),
  o.fetchGenres()
);

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
