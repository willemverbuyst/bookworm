import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import TableWithAllBooks from "./TableWithAllBooks";
import { config } from "../../../business/overmind";

describe("TableWithAllBooks", () => {
  test("should display a table with column headers", () => {
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
        <TableWithAllBooks />
      </Provider>
    );

    const table = screen.getByRole("table", {
      name: /overview of books/i,
    });
    expect(table).toBeInTheDocument();

    const title = screen.getByText(/overview of books/i);
    expect(title).toBeInTheDocument();

    const columnHeaders = ["title", "language", "author", "year", "read"];

    columnHeaders.forEach((header) => {
      const columnHeader = screen.getByRole("columnheader", {
        name: new RegExp(`${header}`),
      });
      expect(columnHeader).toBeInTheDocument();
    });
  });

  test("should display a table with two rows", () => {
    const data = [
      {
        id: "abc123",
        title: "test_title_one",
        language: "test_language_one",
        author: "test_author_one",
        year: 1900,
        read: 1,
      },
      {
        id: "xyz789",
        title: "test_title_two",
        language: "test_language_two",
        author: "test_author_two",
        year: 2000,
        read: 2,
      },
    ];
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.booksApi = {
        status: "ok",
        data,
        message: "testing",
      };
    });
    render(
      <Provider value={overmind}>
        <TableWithAllBooks />
      </Provider>
    );

    data
      .map((d) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...rest } = d;
        return rest;
      })
      .forEach((d) => {
        Object.values(d).forEach((value) => {
          const cell = screen.getByRole("cell", {
            name: new RegExp(`${value}`),
          });
          expect(cell).toBeInTheDocument();
        });
      });
  });

  test("should display a message when there is no data", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.booksApi = {
        status: "ok",
        data: [],
        message: "testing",
      };
    });
    render(
      <Provider value={overmind}>
        <TableWithAllBooks />
      </Provider>
    );

    const message = screen.getByText(/no books/i);
    expect(message).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
