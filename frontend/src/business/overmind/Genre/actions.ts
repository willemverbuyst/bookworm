/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import * as o from "./operators";

export const getGenres = pipe(o.shouldFetchGenres(), o.fetchGenres());
