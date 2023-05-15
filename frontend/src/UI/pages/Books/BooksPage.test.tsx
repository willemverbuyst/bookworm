/* eslint-disable no-param-reassign */
import { ChakraProvider } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { SortDirection } from "../../../business/models";
import { config } from "../../../business/overmind";
import { BooksPage } from "./BooksPage";

vi.mock("../../components/Navigation", () => {
  const NavigationBar = vi.fn();
  return { NavigationBar };
});

describe("BooksPage", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.book.getAllApi = {
      status: "ok",
      result: 1,
      data: [
        {
          id: "abc123",
          title: "test_title_one",
          language: "test_language_one",
          author: "test_author_one",
          year_published: "1900",
          genre: "test_genre",
        },
      ],
      total: 100,
      message: "testing",
    };
    state.book.ui = {
      table: {
        columns: {
          id: {
            display: false,
            field: "id",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
          title: {
            display: true,
            field: "title",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
          author: {
            display: true,
            field: "author",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
          "year published": {
            display: true,
            field: "year published",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
          genre: {
            display: true,
            field: "genre",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
          language: {
            display: true,
            field: "language",
            showInput: false,
            queryString: "",
            isNumeric: false,
          },
        },
        filter: {
          genre: "",
          language: "",
        },
        sort: { property: "title", sortDirection: SortDirection.ASCENDING },
        limit: 10,
        noDataMessage: "no books",
        page: 1,
        pagination: false,
        queryString: "",
        searchKeys: ["title", "author"],
        showAll: false,
        title: "overview of books",
      },
    };
    state.genre.getAllApi = {
      status: "ok",
      data: [{ id: "1", name_of_genre: "genre" }],
      message: "testing",
      total: 1,
      result: 1,
    };
    state.language.getAllApi = {
      status: "ok",
      data: [{ id: "1", name_of_language: "language" }],
      message: "testing",
      total: 1,
      result: 1,
    };
    state.book.statsGenreApi = {
      status: "ok",
      data: [{ id: "1", genre: "genre", number_of_books: 1 }],
      message: "testing",
      result: 1,
    };
    state.book.statsLanguageApi = {
      status: "ok",
      data: [{ id: "1", language: "language", number_of_books: 1 }],
      message: "testing",
      result: 1,
    };
    state.book.statsYearPublishedApi = {
      status: "ok",
      data: [{ year_published: "1900", number_of_books: 10 }],
      message: "testing",
      result: 1,
    };
  });
  test.only("should display a title", () => {
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
