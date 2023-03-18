/* eslint-disable no-param-reassign */
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import BooksPage from "./BooksPage";

vi.mock("../../components/Navigation/NavigationBar", () => {
  const NavigationBar = vi.fn();
  return { default: NavigationBar };
});

describe("BooksPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.booksApi = {
      status: "ok",
      data: [
        {
          id: "abc123",
          title: "test_title_one",
          language: "test_language_one",
          author: "test_author_one",
          year_published: 1900,
          genre: "test_genre",
        },
      ],
      message: "testing",
    };
    state.genresApi = {
      status: "ok",
      data: [{ id: "1", genre: "genre" }],
      message: "testing",
    };
    state.languagesApi = {
      status: "ok",
      data: [{ id: "1", language: "language" }],
      message: "testing",
    };
    state.bookStatsGenreApi = {
      status: "ok",
      data: [{ id: "1", genre: "genre", number_of_books: 1 }],
      message: "testing",
    };
    state.bookStatsLanguageApi = {
      status: "ok",
      data: [{ id: "1", language: "language", number_of_books: 1 }],
      message: "testing",
    };
  });
  test("should display a title", () => {
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <BooksPage />
        </Provider>
      </ChakraProvider>
    );

    const heading = screen.getByRole("heading", {
      name: /books/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("should display a table", () => {
    render(
      <ChakraProvider>
        <Provider value={overmind}>
          <BooksPage />
        </Provider>
      </ChakraProvider>
    );

    const table = screen.getByRole("table", {
      name: /overview of books/i,
    });
    expect(table).toBeInTheDocument();
  });
});
