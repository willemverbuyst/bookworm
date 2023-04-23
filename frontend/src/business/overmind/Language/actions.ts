/* eslint-disable no-param-reassign */
import { debounce, pipe } from "overmind";
import * as o from "./operators";

export const getLanguages = pipe(o.shouldFetchLanguages(), o.fetchLanguages());

export const search = (debounce(100), o.setQueryString());

export const postLanguage = pipe(o.addLanguage(), o.fetchLanguages());
