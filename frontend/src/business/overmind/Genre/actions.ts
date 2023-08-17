import { debounce, filter, pipe } from "overmind";
import {
  addGenres,
  changeGenre,
  fetchGenres,
  removeGenre,
  resetColumnQueryString,
  resetLimit,
  resetPage,
  resetQueryString,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setQueryString,
  setShowAll,
  setShowInput,
  shouldFetchGenres,
  shouldResetQueryString,
} from "./operators";

export { setColumnQueryString, setSort } from "./operators";

export const getGenres = pipe(shouldFetchGenres, fetchGenres);

export const postGenres = pipe(addGenres, fetchGenres);

export const deleteGenre = pipe(removeGenre, fetchGenres);

export const updateGenre = pipe(changeGenre, fetchGenres);

export const changeLimit = pipe(setLimit, resetQueryString, fetchGenres);

export const changePage = pipe(setPage, resetQueryString);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetLimit,
  resetPage
);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  setLimitToTotal,
  resetPage
);

export const search = (debounce(100), setQueryString);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
