import { render, screen } from "@testing-library/react";
import AuthorsPage from "./authorsPage";

describe("Authors page", () => {
  test("should display a title", () => {
    render(<AuthorsPage />);

    const heading = screen.getByRole("heading", {
      name: /authors/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
