/* eslint-disable no-param-reassign */
import { debounce, pipe } from "overmind";
import * as o from "./operators";

export const getGenres = pipe(o.shouldFetchGenres(), o.fetchGenres());

export const search = (debounce(100), o.setQueryString());
