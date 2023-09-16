import { debounce, filter, pipe } from "overmind";
import {
  addLanguages,
  changeLanguage,
  fetchLanguages,
  removeLanguage,
  resetColumnQueryString,
  setQueryString,
  setShowInput,
  shouldFetchLanguages,
  shouldResetQueryString,
} from "./operators";

export { getNameOfLanguage, setColumnQueryString, setSort } from "./operators";

export const getLanguages = pipe(shouldFetchLanguages, fetchLanguages);

export const search = pipe(debounce(100), setQueryString);

export const postLanguages = pipe(addLanguages, fetchLanguages);

export const deleteLanguage = pipe(removeLanguage, fetchLanguages);

export const updateLanguage = pipe(changeLanguage, fetchLanguages);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);

export const changeLimit = () => () => null;

export const changePage = () => () => null;

export const showAllRows = () => () => null;

export const usePagination = () => () => null;
