/* eslint-disable no-param-reassign */
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { Page } from "../../../business/models";
import { config } from "../../../business/overmind";
import { PageNotFoundPage } from "./PageNotFoundPage";

describe("PageNotFoundPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.app = {
      isLoading: false,
      currentPage: Page.PAGE_NOT_FOUND,
      publicNavItems: [],
      privateNavItems: [],
      colors: [],
    };
  });
  test("should display a title", () => {
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <PageNotFoundPage />
        </Provider>
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /404/i,
    });
    const text = screen.getByText(/oops\.\.\.page not found/i);

    expect(heading).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
