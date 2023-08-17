import { filter, parallel, pipe } from "overmind";
import {
  getBooks,
  getBookStatsGenre,
  getBookStatsLanguage,
  getBookStatsYearPublished,
  getGenres,
  getLanguages,
  resetColumnQueryString,
  resetGenre,
  resetLanguage,
  resetLimit,
  resetPage,
  resetQueryString,
  setBooksPage,
  setGenreFilter,
  setLanguageFilter,
  setLimit,
  setLimitToTotal,
  setPage,
  setPagination,
  setShowAll,
  setShowInput,
  shouldLoadBooks,
  shouldResetQueryString,
} from "./operators";

export {
  setColumnQueryString,
  setQueryString as search,
  setSort,
} from "./operators";

export const showBooksPage = pipe(
  setBooksPage,
  shouldLoadBooks,
  parallel(
    getBooks,
    getBookStatsGenre,
    getBookStatsLanguage,
    getBookStatsYearPublished,
    getGenres,
    getLanguages
  )
);

export const changeLimit = pipe(setLimit, resetQueryString, getBooks);

export const changePage = pipe(setPage, resetQueryString, getBooks);

export const changeGenreFilter = pipe(
  setGenreFilter,
  resetQueryString,
  getBooks
);

export const changeLanguageFilter = pipe(
  setLanguageFilter,
  resetQueryString,
  getBooks
);

export const usePagination = pipe(
  setPagination,
  resetQueryString,
  resetGenre,
  resetLanguage,
  resetLimit,
  resetPage,
  getBooks
);

export const showAllRows = pipe(
  setShowAll,
  resetQueryString,
  resetGenre,
  resetLanguage,
  setLimitToTotal,
  resetPage,
  getBooks
);

export const updateShowInput = pipe(
  setShowInput,
  filter(shouldResetQueryString),
  resetColumnQueryString
);
