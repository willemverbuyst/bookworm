import { describe, expect, test } from "vitest";
import { calculateDays } from "./date";

describe("calculateDays", () => {
  test("should return difference between two dates in days including current day", () => {
    expect(calculateDays(new Date("2000-01-10"), new Date("2000-01-01"))).toBe(
      10
    );
    expect(calculateDays(new Date("2000-01-01"), new Date("2000-01-01"))).toBe(
      1
    );
  });
});
