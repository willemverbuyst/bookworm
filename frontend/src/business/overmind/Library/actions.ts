import { debounce, filter, pipe } from "overmind";
import * as o from "./operators";

export const getLibraries = pipe(o.shouldFetchLibraries(), o.fetchLibraries());

export const search = (debounce(100), o.setQueryString());

export const getLibraryById = o.getLibraryById();

export const setSort = o.setSort();

export const setColumnQueryString = o.setColumnQueryString();

export const updateShowInput = pipe(
  o.setShowInput(),
  filter(o.shouldResetQueryString()),
  o.resetColumnQueryString()
);

export const changeLimit = () => () => null;

export const changePage = () => () => null;

export const showAllRows = () => () => null;

export const usePagination = () => () => null;
