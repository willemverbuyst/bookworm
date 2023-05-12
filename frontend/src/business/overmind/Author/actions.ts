import { debounce, parallel, pipe } from "overmind";
import * as o from "./operators";

export const showAuthorsPage = pipe(
  o.setAuthorsPage(),
  o.shouldLoadAuthors(),
  parallel(o.getAuthors(), o.getAuthorStatsPage())
);

export const changeLimit = pipe(
  o.setLimit(),
  o.resetQueryString(),
  o.getAuthors()
);

export const changePage = pipe(
  o.setPage(),
  o.resetQueryString(),
  o.getAuthors()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.setLimitToTotal(),
  o.resetPage(),
  o.getAuthors()
);

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetLimit(),
  o.resetPage(),
  o.getAuthors()
);

export const setSort = o.setSort();

export const search = pipe(debounce(200), o.setQueryString(), o.searching);
