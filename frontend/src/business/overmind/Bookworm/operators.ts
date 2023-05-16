/* eslint-disable no-param-reassign */
import { AxiosError } from "axios";
import { filter } from "overmind";
import { Context } from "..";
import { Bookworm, Page, SortDirection } from "../../models";

export const setBookwormsPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.BOOKWORMS;
  };

export const shouldLoadBookworms = () =>
  filter(({ state }: Context) => {
    return !state.bookworm.getAllApi?.data.length;
  });

export const getBookworms =
  () =>
  async ({ actions, effects, state }: Context) => {
    const {
      filter: { active },
      limit,
      page,
    } = state.bookworm.ui.table;
    state.bookworm.isLoading = true;
    const response = await effects.bookworm.api.getBookworms({
      active,
      limit,
      page,
    });

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.bookworm.getAllApi = response;
    }

    state.bookworm.isLoading = false;
  };

export const getBookWormById =
  () =>
  async ({ actions, effects, state }: Context, { id }: { id: string }) => {
    state.bookworm.isLoading = true;
    const response = await effects.bookworm.api.getBookwormById(id);

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.bookworm.bookwormDetailsApi = response;
    }

    state.bookworm.isLoading = false;
  };

export const getBookwormStatsLibrary =
  () =>
  async ({ actions, effects, state }: Context) => {
    state.bookworm.isLoading = true;
    const response = await effects.bookworm.api.getBookwormStatsibrary();

    if (!response || response instanceof AxiosError) {
      actions.api.handleErrorResponse({ response });
    } else {
      state.bookworm.statsLibraryApi = response;
    }

    state.bookworm.isLoading = false;
  };

export const setLimit =
  () =>
  ({ state }: Context, { limit }: { limit: number }) => {
    state.bookworm.ui.table.limit = limit;
  };

export const resetLimit =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.limit = 10;
  };

export const setLimitToTotal =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.limit =
      state.bookworm.getAllApi?.total || state.bookworm.ui.table.limit;
  };

export const setPage =
  () =>
  ({ state }: Context, { page }: { page: number }) => {
    state.bookworm.ui.table.page = page;
  };

export const resetPage =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.page = 1;
  };

export const setActiveFilter =
  () =>
  ({ state }: Context, { active }: { active: boolean }) => {
    state.bookworm.ui.table.filter.active = active;
  };

export const resetActiveFilter =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.filter.active = false;
  };

export const setQueryString =
  () =>
  ({ state }: Context, { queryString }: { queryString: string }) => {
    state.bookworm.ui.table.queryString = queryString;
  };

export const resetQueryString =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.queryString = "";
  };

export const setShowAll =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.showAll = true;
  };

export const setPagination =
  () =>
  ({ state }: Context) => {
    state.bookworm.ui.table.showAll = false;
  };

export const setSort =
  () =>
  (
    { state }: Context,
    {
      property,
      sortDirection,
    }: { property: keyof Bookworm; sortDirection: keyof typeof SortDirection }
  ) => {
    state.bookworm.ui.table.sort = { property, sortDirection };
  };

export const setColumnQueryString =
  () =>
  (
    { state }: Context,
    { field, queryString }: { field: keyof Bookworm; queryString: string }
  ) => {
    const column = state.bookworm.ui.table.columns[field];

    column.queryString = queryString;
  };

export const resetColumnQueryString =
  () =>
  ({ state }: Context, { field }: { field: keyof Bookworm }) => {
    const column = state.bookworm.ui.table.columns[field];

    column.queryString = "";
  };

export const setShowInput =
  () =>
  ({ state }: Context, { field }: { field: keyof Bookworm }) => {
    const column = state.bookworm.ui.table.columns[field];

    column.showInput = !column.showInput;

    return { field };
  };

export const shouldResetQueryString =
  () =>
  ({ state }: Context, { field }: { field: keyof Bookworm }) => {
    const column = state.bookworm.ui.table.columns[field];

    return !column.showInput;
  };
