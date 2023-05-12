import { SortDirection } from "../models";
import { genericSort } from "./genericSort";

const testObject1 = {
  foo: 1,
  bar: "Z_test",
  quuz: true,
};
const testObject2 = {
  foo: 2,
  bar: "A_test",
  quuz: true,
};

describe("genericSort", () => {
  it("should return 1", () => {
    expect(
      genericSort(testObject1, testObject2, {
        property: "foo",
        sortDirection: SortDirection.DESCENDING,
      })
    ).toBe(1);
    expect(
      genericSort(testObject1, testObject2, {
        property: "bar",
        sortDirection: SortDirection.ASCENDING,
      })
    ).toBe(1);
  });

  it("should return -1", () => {
    expect(
      genericSort(testObject1, testObject2, {
        property: "foo",
        sortDirection: SortDirection.ASCENDING,
      })
    ).toBe(-1);
    expect(
      genericSort(testObject1, testObject2, {
        property: "bar",
        sortDirection: SortDirection.DESCENDING,
      })
    ).toBe(-1);
  });

  it("should return 0", () => {
    expect(
      genericSort(testObject1, testObject2, {
        property: "quuz",
        sortDirection: SortDirection.ASCENDING,
      })
    ).toBe(0);
    expect(
      genericSort(testObject1, testObject2, {
        property: "quuz",
        sortDirection: SortDirection.DESCENDING,
      })
    ).toBe(-0);
  });
});
