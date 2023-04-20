/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import * as o from "./operators";

export const showAdminPage = pipe(o.setAdminPage(), o.getAdminData());

export const showAdminGenrePage = pipe(o.setAdminGenrePage(), o.getAdminData());

export const showAdminLanguagePage = pipe(
  o.setAdminLanguagePage(),
  o.getAdminData()
);

export const showAdminLibraryPage = pipe(
  o.setAdminLibraryPage(),
  o.getAdminData()
);
