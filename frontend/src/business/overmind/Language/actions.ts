/* eslint-disable no-param-reassign */
import { pipe } from "overmind";
import * as o from "./operators";

export const getLanguages = pipe(o.shouldFetchLanguages(), o.fetchLanguages());
