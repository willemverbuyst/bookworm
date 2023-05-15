import { getEntries } from "./getEntries";

describe("getEntries", () => {
  it("should return an array of key-value pairs for an object", () => {
    const obj = {
      name: "John",
      age: 25,
      city: "New York",
    };
    const result = getEntries(obj);
    const expectedResult = [
      ["name", "John"],
      ["age", 25],
      ["city", "New York"],
    ];
    expect(result).toEqual(expectedResult);
    expect(result).toContainEqual(["name", "John"]);
    expect(result).toContainEqual(["age", 25]);
    expect(result).toContainEqual(["city", "New York"]);
  });
});
