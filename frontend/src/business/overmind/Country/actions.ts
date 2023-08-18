import { pipe } from "overmind";
import { fetchCountries, shoulLoadCountries } from "./operators";

export const getCountries = pipe(shoulLoadCountries, fetchCountries);
