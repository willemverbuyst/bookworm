import { functions } from "../functions";
import { Columns, Sort } from "../models";

export const searchByBar =
  <T>(properties: Array<keyof T>, query: string) =>
  (object: T) =>
    functions.genericSearch(object, properties, query, false);

export const sortByProperty =
  <T>(sort: Sort<T>) =>
  (a: T, b: T) =>
    functions.genericSort(a, b, {
      property: sort.property,
      sortDirection: sort.sortDirection,
    });

export const searchByColumn =
  <T>(columns: Columns<T>) =>
  (object: T) =>
    (Object.values(columns) as Array<(typeof columns)[keyof typeof columns]>)
      .filter((c) => c.display)
      .every((c) =>
        functions.genericSearch(object, [c.field], c.queryString, false)
      );
