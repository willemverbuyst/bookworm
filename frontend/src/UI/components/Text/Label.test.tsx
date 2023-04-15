import { FormControl } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { Label } from "./Label";

describe("Label", () => {
  test("should display label text passed as prop", () => {
    render(
      <FormControl>
        <Label text="test label" isRequired={false} />
      </FormControl>
    );

    const labelText = screen.getByText(/test label/i);

    expect(labelText).toBeInTheDocument();
  });

  test("should display label with asterix if required is true", () => {
    render(
      <FormControl>
        <Label text="test label" isRequired />
      </FormControl>
    );

    const labelText = screen.getByText(/test label*/i);

    expect(labelText).toBeInTheDocument();
  });

  test("should display label in grey and italic", () => {
    render(
      <FormControl>
        <Label text="test label" isRequired />
      </FormControl>
    );

    const labelText = screen.getByText(/test label*/i);

    expect(labelText).toHaveStyle(
      "color: rgb(163, 163, 163); font-style: italic;"
    );
  });
});
