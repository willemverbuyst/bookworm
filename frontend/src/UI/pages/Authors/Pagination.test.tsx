import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const props = {
    total: 100,
    limit: 10,
  };

  it("renders the component", () => {
    render(<Pagination {...props} />);

    [...Array(5).keys()].forEach((i) => {
      const btn = screen.getByRole("button", { name: String(i + 1) });
      expect(btn).toBeInTheDocument();
    });

    const btnTen = screen.getByText("10");
    const ellipsis = screen.getByText("...");

    expect(btnTen).toBeInTheDocument();
    expect(ellipsis).toBeInTheDocument();

    const left = screen.getByTestId("left-arrow");
    const right = screen.getByTestId("right-arrow");

    expect(left).toBeInTheDocument();
    expect(right).toBeInTheDocument();
  });

  it("disables the left arrow when on the first page", () => {
    render(<Pagination {...props} />);
    const btn = screen.getByRole("button", { name: String(1) });
    user.click(btn);

    const left = screen.getByTestId("left-arrow");
    expect(left).toBeDisabled();
  });

  it.only("disables the right arrow when on the last page", async () => {
    render(<Pagination {...props} />);
    const btn = screen.getByRole("button", { name: String(10) });

    user.click(btn);

    setTimeout(() => {
      const right = screen.getByTestId("right-arrow");
      expect(right).toBeDisabled();
    }, 500);
  });
});
