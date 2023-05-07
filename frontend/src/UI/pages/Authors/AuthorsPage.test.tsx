/* eslint-disable no-param-reassign */
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import { AuthorsPage } from "./AuthorsPage";

vi.mock("../../components/Navigation", () => {
  const NavigationBar = vi.fn();
  return { NavigationBar };
});

describe("AuthorsPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.author.getAllApi = {
      status: "ok",
      data: [
        {
          id: "abc123",
          first_name: "test_first_name",
          last_name: "test_last_name",
          books_written: 1,
        },
      ],
      total: 100,
      result: 1,
      message: "testing",
    };
    state.author.statsPageApi = {
      status: "ok",
      data: {
        pages_per_author: [
          {
            id: "1",
            author: "test_author",
            number_of_pages: 5,
            number_of_books: 3,
          },
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
