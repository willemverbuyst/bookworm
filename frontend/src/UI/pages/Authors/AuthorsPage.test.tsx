/* eslint-disable no-param-reassign */
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import AuthorsPage from "./AuthorsPage";

vi.mock("../../components/Navigation/NavigationBar", () => {
  const NavigationBar = vi.fn();
  return { default: NavigationBar };
});

describe("AuthorsPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.authorsApi = {
      status: "ok",
      data: [
        {
          id: "abc123",
          first_name: "test_first_name",
          last_name: "test_last_name",
          books_written: 1,
        },
      ],
      message: "testing",
    };
    state.authorStatsPageApi = {
      status: "ok",
      data: {
        pages_per_author: [
          { id: "1", author: "test_author", number_of_pages: 5 },
        ],
        average_pages: 10,
      },
      message: "testing",
    };
  });
  test("should display a title", () => {
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <AuthorsPage />
        </Provider>
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /authors/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
