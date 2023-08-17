import { functions } from "../../functions";
import { ApiResponseLibrary, UI } from "../../models";

export const returnLibraryObject = (
  library: ApiResponseLibrary["data"][0]
) => ({
  id: library.id,
  "name of library": library.name_of_library,
  phone: library.phone,
  address: library.address,
  postalCode: library.postal_code,
  city: library.city,
  country: library.country,
});

export const searchByBar =
  <T>(properties: Array<keyof T>, query: string) =>
  (object: T) =>
    functions.genericSearch(object, properties, query, false);

export const sortByProperty =
  <T>(sort: UI<T, null>["table"]["sort"]) =>
  (a: T, b: T) =>
    functions.genericSort(a, b, {
      property: sort.property,
      sortDirection: sort.sortDirection,
    });

export const searchByColumn =
  <T>(columns: UI<T, null>["table"]["columns"]) =>
  (object: T) =>
    (Object.values(columns) as Array<(typeof columns)[keyof typeof columns]>)
      .filter((c) => c.display)
      .every((c) =>
        functions.genericSearch(object, [c.field], c.queryString, false)
      );
