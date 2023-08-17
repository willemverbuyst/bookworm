import { filter, parallel, pipe } from "overmind";
import {
  getAuthors,
  getAuthorStatsPage,
  resetColumnQueryString,
  resetLimit,
  resetPage,
  resetQueryString,
  setAuthorsPage,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setShowAll,
  setShowInput,
  shouldLoadAuthors,
  shouldResetQueryString,
} from "./operators";

export {
  setColumnQueryString,
  setQueryString as search,
  setSort,
} from "./operators";

export const showAuthorsPage = pipe(
  setAuthorsPage,
  shouldLoadAuthors,
  parallel(getAuthors, getAuthorStatsPage)
);

export const changeLimit = pipe(setLimit, resetQueryString, getAuthors);

export const changePage = pipe(setPage, resetQueryString, getAuthors);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  setLimitToTotal,
  resetPage,
  getAuthors
);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetLimit,
  resetPage,
  getAuthors
);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
