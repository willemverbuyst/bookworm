import { render, screen } from "@testing-library/react";
import BooksPage from "./booksPage";

describe("Books page", () => {
  test("should display a title", () => {
    render(<BooksPage />);

    const heading = screen.getByRole("heading", {
      name: /books/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
