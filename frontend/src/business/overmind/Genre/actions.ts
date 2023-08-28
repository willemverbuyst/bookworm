import { debounce, filter, pipe } from "overmind";
import { Context } from "..";
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

export const getOption = ({ state }: Context, { id }: { id: string }) => {
  const apiData = state.genre.getAllApi?.data || [];

  const option = apiData.find((i) => i.id === id);

  if (!option) {
    return null;
  }

  return {
    display: option.name_of_genre,
    value: option.id,
  };
};

export const getNameOfGenre = ({ state }: Context, { id }: { id: string }) => {
  const genreData = state.genre.getAllApi?.data || [];
  return genreData.find((g) => g.id === id)?.name_of_genre;
};
