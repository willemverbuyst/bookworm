import { SortDirection } from "../models";

export function genericSort<T>(
  a: T,
  b: T,
  propertyType: {
    property: keyof T;
    sortDirection: keyof typeof SortDirection;
  }
) {
  const { property, sortDirection } = propertyType;
  const result = (): number => {
    if (a[property] > b[property]) {
      return 1;
    }

    if (a[property] < b[property]) {
      return -1;
    }

    return 0;
  };
  return sortDirection === SortDirection.DESCENDING ? result() * -1 : result();
}
