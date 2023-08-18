import { debounce, filter, pipe } from "overmind";
import {
  fetchLibraries,
  resetColumnQueryString,
  setQueryString,
  setShowInput,
  shouldFetchLibraries,
  shouldResetQueryString,
} from "./operators";

export { getLibraryById, setColumnQueryString, setSort } from "./operators";

export const getLibraries = pipe(shouldFetchLibraries, fetchLibraries);

export const search = (debounce(100), setQueryString);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);

export const changeLimit = () => () => null;

export const changePage = () => () => null;

export const showAllRows = () => () => null;

export const usePagination = () => () => null;
