import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import BooksPage from "./booksPage";
import { config } from "../../../business/overmind";

describe("Books page", () => {
  test("should display a title", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.booksApi = {
        status: "ok",
        data: [
          {
            id: "abc123",
            title: "test_title_one",
            language: "test_language_one",
            author: "test_author_one",
            year: 1900,
            read: 1,
          },
        ],
        message: "testing",
      };
    });
    render(
      <Provider value={overmind}>
        <BooksPage />
      </Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /books/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("should display a table", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.booksApi = {
        status: "ok",
        data: [
          {
            id: "abc123",
            title: "test_title_one",
            language: "test_language_one",
            author: "test_author_one",
            year: 1900,
            read: 1,
          },
        ],
        message: "testing",
      };
    });
    render(
      <Provider value={overmind}>
        <BooksPage />
      </Provider>
    );

    const table = screen.getByRole("table", {
      name: /overview of books/i,
    });
    expect(table).toBeInTheDocument();
  });
});
