import { FormControl } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import HelperText from "./HelperText";

describe("HelperText", () => {
  test("should display the text passed as prop", () => {
    render(
      <FormControl>
        <HelperText text="testing" />
      </FormControl>
    );

    const text = screen.getByText(/testing/i);
    expect(text).toBeInTheDocument();
  });
});
