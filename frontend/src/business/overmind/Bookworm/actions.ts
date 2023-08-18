import { debounce, filter, parallel, pipe } from "overmind";
import {
  getBookWormById,
  getBookworms,
  getBookwormStatsLibrary,
  resetActiveFilter,
  resetColumnQueryString,
  resetLimit,
  resetPage,
  resetQueryString,
  setActiveFilter,
  setBookwormsPage,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setQueryString,
  setShowAll,
  setShowInput,
  shouldLoadBookworms,
  shouldResetQueryString,
} from "./operators";

export { setColumnQueryString, setSort } from "./operators";

export const showBookwormsPage = pipe(
  setBookwormsPage,
  shouldLoadBookworms,
  parallel(getBookworms, getBookwormStatsLibrary)
);

export const changeLimit = pipe(setLimit, resetQueryString, getBookworms);

export const changePage = pipe(setPage, resetQueryString, getBookworms);

export const changeActiveFilter = pipe(
  setActiveFilter,
  resetQueryString,
  getBookworms
);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetActiveFilter,
  resetLimit,
  resetPage,
  getBookworms
);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  resetActiveFilter,
  setLimitToTotal,
  resetPage,
  getBookworms
);

export const search = (debounce(100), setQueryString);

export const getBookworm = getBookWormById;

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
