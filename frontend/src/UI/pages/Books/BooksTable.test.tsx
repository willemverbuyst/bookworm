/* eslint-disable no-param-reassign */
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../../../business/overmind";
import TableWithAllBooks from "./BooksTable";

describe("BooksTable", () => {
  test("should display a table with column headers", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.booksApi = {
        status: "ok",
        result: 1,
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
        total_number_of_books: 100,
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

    const columnHeaders = [
      "title",
      "language",
      "author",
      "year published",
      "genre",
    ];

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
        year_published: 1900,
        genre: "genre_1",
      },
      {
        id: "xyz789",
        title: "test_title_two",
        language: "test_language_two",
        author: "test_author_two",
        year_published: 2000,
        genre: "genre_2",
      },
    ];

    const overmind = createOvermindMock(config, (state) => {
      state.booksApi = {
        status: "ok",
        result: data.length,
        data,
        total_number_of_books: 100,
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
});
