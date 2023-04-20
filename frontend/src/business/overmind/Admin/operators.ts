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

export const setAdminGenrePage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.ADMIN_GENRE;
  };

export const setAdminLanguagePage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.ADMIN_LANGUAGE;
  };

export const setAdminLibraryPage =
  () =>
  ({ state }: Context) => {
    state.app.currentPage = Page.ADMIN_LIBRARY;
  };
