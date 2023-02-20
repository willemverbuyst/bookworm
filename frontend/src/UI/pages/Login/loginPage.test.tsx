import { render, screen } from "@testing-library/react";
import LoginPage from "./loginPage";

describe("Login page", () => {
  test("should display a title", () => {
    render(<LoginPage />);

    const heading = screen.getByRole("heading", {
      name: /login/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
