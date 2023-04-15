import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import { SignInPage } from "./SignInPage";

vi.mock("../../components/Navigation", () => {
  const NavigationBar = vi.fn();
  return { NavigationBar };
});

describe("SingInPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    // eslint-disable-next-line no-param-reassign
    state.auth = {
      isSignedIn: false,
      token: "",
    };
  });
  test("should display a title", () => {
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <BrowserRouter>
            <SignInPage />
          </BrowserRouter>
        </Provider>
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /sign in/i,
    });
    expect(heading).toBeInTheDocument();
  });
});
