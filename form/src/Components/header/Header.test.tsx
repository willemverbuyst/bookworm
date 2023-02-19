import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Accordion test", () => {
  test("should show title all the time", () => {
    render(<Header />);

    const header = screen.getByRole("heading", {
      name: /your dream trip/i,
    });
    expect(header).toBeInTheDocument();
  });
});
