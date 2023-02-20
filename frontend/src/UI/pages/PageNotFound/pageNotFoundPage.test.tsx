import { render, screen } from "@testing-library/react";
import PageNotFoundPage from "./pageNotFoundPage";

describe("PageNotFout page", () => {
  test("should display a title", () => {
    render(<PageNotFoundPage />);

    const heading = screen.getByRole("heading", {
      name: /404/i,
    });
    const text = screen.getByText(/oops\.\.\.page not found/i);

    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
