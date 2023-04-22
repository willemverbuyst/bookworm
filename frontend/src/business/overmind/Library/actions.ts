/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import * as o from "./operators";

export const getLibraries = pipe(o.shouldFetchLibraries(), o.fetchLibraries());
