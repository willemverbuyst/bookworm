import { FormControl } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage";

describe("HelperText", () => {
  test("should display the text passed as prop", () => {
    render(
      <FormControl isInvalid>
        <ErrorMessage text="test error" />
      </FormControl>
    );

    const text = screen.getByText(/test error/i);

    expect(text).toBeInTheDocument();
  });

  test("should display text in red", () => {
    render(
      <FormControl isInvalid>
        <ErrorMessage text="test error" />
      </FormControl>
    );

    const labelText = screen.getByText(/test error/i);

    expect(labelText).toHaveStyle("color: #e53e3e;");
  });

  test("should display no text when there are no errors", () => {
    render(
      <FormControl isInvalid={false}>
        <ErrorMessage text="test error" />
      </FormControl>
    );

    const labelText = screen.queryByText(/test error/i);

    expect(labelText).not.toBeInTheDocument();
  });
});
