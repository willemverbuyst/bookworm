import { debounce, filter, pipe } from "overmind";
import * as o from "./operators";

export const getGenres = pipe(o.shouldFetchGenres(), o.fetchGenres());

export const postGenres = pipe(o.addGenres(), o.fetchGenres());

export const deleteGenre = pipe(o.deleteGenre(), o.fetchGenres());

export const updateGenre = pipe(o.updateGenre(), o.fetchGenres());

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

export const setSort = o.setSort();

export const search = (debounce(100), o.setQueryString());

export const setColumnQueryString = o.setColumnQueryString();

export const updateShowInput = pipe(
  o.setShowInput(),
  filter(o.shouldResetQueryString()),
  o.resetColumnQueryString()
);
