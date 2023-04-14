import { groupBy } from "./groupBy";

describe("groupBy", () => {
  it("should group an array of objects by a given key", () => {
    const input = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ];

    const expected = {
      "25": [
        { name: "Alice", age: 25 },
        { name: "Charlie", age: 25 },
      ],
      "30": [{ name: "Bob", age: 30 }],
    };

    const actual = groupBy(input, "age");

    expect(actual).toEqual(expected);
  });

  it("should return an empty object when given an empty array", () => {
    const actual = groupBy([], "age");

    expect(actual).toEqual({});
  });

  it("should return an empty object when given an array with objects that has not a string or number for the key", () => {
    const input = [
      { name: "Alice", true: true },
      { name: "Bob", true: true },
      { name: "Charlie", true: true },
    ];

    const actual = groupBy(input, "true");

    expect(actual).toEqual({});
  });
});
