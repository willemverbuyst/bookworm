import { debounce, pipe } from "overmind";
import * as o from "./operators";

export const getLibraries = pipe(o.shouldFetchLibraries(), o.fetchLibraries());

export const search = (debounce(100), o.setQueryString());

export const getLibraryById = o.getLibraryById();

export const setSort = o.setSort();
