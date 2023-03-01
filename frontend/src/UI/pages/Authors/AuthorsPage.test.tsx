import { render, screen } from "@testing-library/react";
import AuthorsPage from "./Authorspage";

describe("AuthorsPage", () => {
  test("should display a title", () => {
    render(<AuthorsPage />);

    const heading = screen.getByRole("heading", {
      name: /authors/i,
    });

    expect(heading).toBeInTheDocument();
  });
});