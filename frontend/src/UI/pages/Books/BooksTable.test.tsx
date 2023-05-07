/* eslint-disable no-param-reassign */
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../../../business/overmind";
import { BooksTable } from "./BooksTable";

describe("BooksTable", () => {
  test("should display a table with column headers", () => {
    const overmind = createOvermindMock(config, (state) => {
      state.book.getAllApi = {
        status: "ok",
        result: 1,
        data: [
          {
            id: "abc123",
            title: "test_title_one",
            author: "test_author_one",
            year_published: "1900",
            genre: "test_genre",
            language: "test_language_one",
          },
        ],
        total: 100,
        message: "testing",
      };
      state.book.ui = {
        table: {
          columns: [
            { field: "title" },
            { field: "author" },
            { field: "year published" },
            { field: "genre" },
            { field: "language" },
          ],
          filter: {
            genre: "",
            language: "",
          },
          limit: 10,
          noDataMessage: "no books",
          page: 1,
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
        result: 1,
        data: [{ id: "1", genre: "genre", number_of_books: 1 }],
        message: "testing",
      };
      state.book.statsLanguageApi = {
        status: "ok",
        result: 1,
        data: [{ id: "1", language: "language", number_of_books: 1 }],
        message: "testing",
      };
      state.book.statsYearPublishedApi = {
        status: "ok",
        result: 1,
        data: [{ year_published: "1900", number_of_books: 10 }],
        message: "testing",
      };
    });
    render(
      <Provider value={overmind}>
        <BooksTable />
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
      "author",
      "year published",
      "genre",
      "language",
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
        year_published: "1900",
        genre: "genre_1",
      },
      {
        id: "xyz789",
        title: "test_title_two",
        language: "test_language_two",
        author: "test_author_two",
        year_published: "2000",
        genre: "genre_2",
      },
    ];

    const overmind = createOvermindMock(config, (state) => {
      state.book.getAllApi = {
        status: "ok",
        result: data.length,
        data,
        total: 100,
        message: "testing",
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
        result: 1,
        data: [{ id: "1", genre: "genre", number_of_books: 1 }],
        message: "testing",
      };
      state.book.statsLanguageApi = {
        status: "ok",
        result: 1,
        data: [{ id: "1", language: "language", number_of_books: 1 }],
        message: "testing",
      };
      state.book.statsYearPublishedApi = {
        status: "ok",
        result: 1,
        data: [{ year_published: "1900", number_of_books: 10 }],
        message: "testing",
      };
    });

    render(
      <Provider value={overmind}>
        <BooksTable />
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
