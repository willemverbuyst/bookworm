import { pipe } from "overmind";
import * as o from "./operators";

export const getCountries = pipe(o.shoulLoadCountries, o.fetchCountries);
