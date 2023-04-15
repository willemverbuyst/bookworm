import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import { HomePage } from "./HomePage";

vi.mock("../../components/Navigation", () => {
  const NavigationBar = vi.fn();
  return { NavigationBar };
});

describe("HomePage", () => {
  test("should display a title", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.auth = {
        isSignedIn: false,
        token: "",
      };
    });
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <HomePage />
        </Provider>
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /home/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
