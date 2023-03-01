import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home page", () => {
  test("should display a title", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /home/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
