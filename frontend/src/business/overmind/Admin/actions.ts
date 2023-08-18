/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import {
  getAdminData,
  setAdminGenrePage,
  setAdminLanguagePage,
  setAdminLibraryPage,
  setAdminPage,
} from "./operators";

export const showAdminPage = pipe(setAdminPage, getAdminData);

export const showAdminGenrePage = pipe(setAdminGenrePage, getAdminData);

export const showAdminLanguagePage = pipe(setAdminLanguagePage, getAdminData);

export const showAdminLibraryPage = pipe(setAdminLibraryPage, getAdminData);
