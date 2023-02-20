import { render, screen } from "@testing-library/react";
import ReviewPage from "./reviewPage";

describe("PageNotFout page", () => {
  test("should display a title", () => {
    render(<ReviewPage />);

    const heading = screen.getByRole("heading", {
      name: /review/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
