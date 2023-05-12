import { debounce, pipe } from "overmind";

import * as o from "./operators";

export const getLanguages = pipe(o.shouldFetchLanguages(), o.fetchLanguages());

export const search = pipe(debounce(100), o.setQueryString());

export const postLanguages = pipe(o.addLanguages(), o.fetchLanguages());

export const deleteLanguage = pipe(o.deleteLanguage(), o.fetchLanguages());

export const updateLanguage = pipe(o.updateLanguage(), o.fetchLanguages());

export const setSort = o.setSort();
