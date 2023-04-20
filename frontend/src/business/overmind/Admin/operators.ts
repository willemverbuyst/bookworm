/* eslint-disable no-param-reassign */
import { Context } from "..";
import { Page } from "../../models";

export const setAdminPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.ADMIN;
  };

export const getAdminData =
  () =>
  ({ actions }: Context) => {
    actions.genre.getGenres();
    actions.language.getLanguages();
    actions.library.getLibraries();
  };
