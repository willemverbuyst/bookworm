import { render, screen } from "@testing-library/react";
import SignInPage from "./SignInPage";

describe("SingInPage", () => {
  test("should display a title", () => {
    render(<SignInPage />);

    const heading = screen.getByRole("heading", {
      name: /sign in/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
