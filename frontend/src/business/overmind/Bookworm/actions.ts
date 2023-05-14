import { debounce, parallel, pipe } from "overmind";
import * as o from "./operators";

export const showBookwormsPage = pipe(
  o.setBookwormsPage(),
  o.shouldLoadBookworms(),
  parallel(o.getBookworms(), o.getBookwormStatsLibrary())
);

export const changeLimit = pipe(
  o.setLimit(),
  o.resetQueryString(),
  o.getBookworms()
);

export const changePage = pipe(
  o.setPage(),
  o.resetQueryString(),
  o.getBookworms()
);

export const changeActiveFilter = pipe(
  o.setActiveFilter(),
  o.resetQueryString(),
  o.getBookworms()
);

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetActiveFilter(),
  o.resetLimit(),
  o.resetPage(),
  o.getBookworms()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.resetActiveFilter(),
  o.setLimitToTotal(),
  o.resetPage(),
  o.getBookworms()
);

export const setSort = o.setSort();

export const search = (debounce(100), o.setQueryString());

export const getBookworm = o.getBookWormById();

export const setColumnQueryString = o.setColumnQueryString();

export const setShowInput = o.setShowInput();
