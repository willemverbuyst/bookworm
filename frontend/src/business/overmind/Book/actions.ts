import { parallel, pipe } from "overmind";
import * as o from "./operators";

export const showBooksPage = pipe(
  o.setBooksPage(),
  o.shouldLoadBooks(),
  parallel(
    o.getBooks(),
    o.getBookStatsGenre(),
    o.getBookStatsLanguage(),
    o.getBookStatsYearPublished(),
    o.getGenres(),
    o.getLanguages()
  )
);

export const changeLimit = pipe(
  o.setLimit(),
  o.resetQueryString(),
  o.getBooks()
);

export const changePage = pipe(o.setPage(), o.resetQueryString(), o.getBooks());

export const changeGenreFilter = pipe(
  o.setGenreFilter(),
  o.resetQueryString(),
  o.getBooks()
);

export const changeLanguageFilter = pipe(
  o.setLanguageFilter(),
  o.resetQueryString(),
  o.getBooks()
);

export const usePagination = pipe(
  o.setPagination(),
  o.resetQueryString(),
  o.resetGenre(),
  o.resetLanguage(),
  o.resetLimit(),
  o.resetPage(),
  o.getBooks()
);

export const showAllRows = pipe(
  o.setShowAll(),
  o.resetQueryString(),
  o.resetGenre(),
  o.resetLanguage(),
  o.setLimitToTotal(),
  o.resetPage(),
  o.getBooks()
);

export const setSort = o.setSort();

export const search = o.setQueryString();

export const setColumnQueryString = o.setColumnQueryString();

export const setShowInput = o.setShowInput();
