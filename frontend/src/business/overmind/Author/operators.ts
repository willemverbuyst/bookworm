/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Page } from "../../../configuration/navigation";
import { Author, SortDirection } from "../../models";

export const setAuthorsPage = ({ state }: Context) => {
  state.app.currentPage = Page.AUTHORS;
};

export const shouldLoadAuthors = filter(({ state }: Context) => {
  return !state.author.getAllApi?.data.length;
});

export const getAuthors = async ({ actions, effects, state }: Context) => {
  const { limit, page } = state.author.ui.table;
  state.author.isLoading = true;
  const response = await effects.author.api.getAuthors({ limit, page });

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.author.getAllApi = response;
  }

  state.author.isLoading = false;
};

export const getAuthorStatsPage = async ({
  actions,
  effects,
  state,
}: Context) => {
  state.author.isLoading = true;
  const response = await effects.author.api.getAuthorStatsPages();

  if (!response || response instanceof AxiosError) {
    actions.api.handleErrorResponse({ response });
  } else {
    state.author.statsPageApi = response;
  }

  state.author.isLoading = false;
};

export const setLimit = ({ state }: Context, { limit }: { limit: number }) => {
  state.author.ui.table.limit = limit;
};

export const resetLimit = ({ state }: Context) => {
  state.author.ui.table.limit = 10;
};

export const setLimitToTotal = ({ state }: Context) => {
  state.author.ui.table.limit =
    state.author.getAllApi?.total || state.author.ui.table.limit;
};

export const setPage = ({ state }: Context, { page }: { page: number }) => {
  state.author.ui.table.page = page;
};

export const resetPage = ({ state }: Context) => {
  state.author.ui.table.page = 1;
};

export const setQueryString = (
  { state }: Context,
  { queryString }: { queryString: string }
) => {
  state.author.ui.table.queryString = queryString;
};

export const resetQueryString = ({ state }: Context) => {
  state.author.ui.table.queryString = "";
};

export const setShowAll = ({ state }: Context) => {
  state.author.ui.table.showAll = true;
};

export const setPagination = ({ state }: Context) => {
  state.author.ui.table.showAll = false;
};

export const setSort = (
  { state }: Context,
  {
    property,
    sortDirection,
  }: { property: keyof Author; sortDirection: keyof typeof SortDirection }
) => {
  state.author.ui.table.sort = { property, sortDirection };
};

export const setColumnQueryString = (
  { state }: Context,
  { field, queryString }: { field: keyof Author; queryString: string }
) => {
  const column = state.author.ui.table.columns[field];

  column.queryString = queryString;
};

export const resetColumnQueryString = (
  { state }: Context,
  { field }: { field: keyof Author }
) => {
  const column = state.author.ui.table.columns[field];

  column.queryString = "";
};

export const setShowInput = (
  { state }: Context,
  { field }: { field: keyof Author }
) => {
  const column = state.author.ui.table.columns[field];

  column.showInput = !column.showInput;

  return { field };
};

export const shouldResetQueryString = (
  { state }: Context,
  { field }: { field: keyof Author }
) => {
  const column = state.author.ui.table.columns[field];

  return !column.showInput;
};
