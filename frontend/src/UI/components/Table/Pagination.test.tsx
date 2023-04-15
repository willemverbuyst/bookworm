/* eslint-disable no-param-reassign */
import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";

import user from "@testing-library/user-event";
import { config, stateSectionsWithTable } from "../../../business/overmind";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const overmind = createOvermindMock(config, (state) => {
    state.book.getAllApi = {
      status: "ok",
      result: 1,
      data: [
        {
          id: "abc123",
          title: "test_title_one",
          author: "test_author_one",
          year_published: 1900,
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
          { field: "year_published" },
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
      data: [{ id: "1", genre: "genre" }],
      message: "testing",
    };
    state.language.getAllApi = {
      status: "ok",
      data: [{ id: "1", language: "language" }],
      message: "testing",
    };
    state.book.statsGenreApi = {
      status: "ok",
      data: [{ id: "1", genre: "genre", number_of_books: 1 }],
      message: "testing",
    };
    state.book.statsLanguageApi = {
      status: "ok",
      data: [{ id: "1", language: "language", number_of_books: 1 }],
      message: "testing",
    };
  });
  const props = {
    total: 100,
    state: stateSectionsWithTable.book,
  };

  it("renders the component", () => {
    render(
      <Provider value={overmind}>
        <Pagination {...props} />
      </Provider>
    );

    [...Array(5).keys()].forEach((i) => {
      const btn = screen.getByRole("button", { name: String(i + 1) });
      expect(btn).toBeInTheDocument();
    });

    const btnTen = screen.getByRole("button", {
      name: /10/i,
    });
    const ellipsis = screen.getByText("...");

    expect(btnTen).toBeInTheDocument();
    expect(ellipsis).toBeInTheDocument();

    const left = screen.getByTestId("left-arrow");
    const right = screen.getByTestId("right-arrow");

    expect(left).toBeInTheDocument();
    expect(right).toBeInTheDocument();
  });

  it("disables the left arrow when on the first page", () => {
    render(
      <Provider value={overmind}>
        <Pagination {...props} />
      </Provider>
    );
    const btn = screen.getByRole("button", { name: String(1) });
    user.click(btn);

    const left = screen.getByTestId("left-arrow");
    expect(left).toBeDisabled();
  });

  it("disables the right arrow when on the last page", async () => {
    render(
      <Provider value={overmind}>
        <Pagination {...props} />
      </Provider>
    );
    const btn = screen.getByRole("button", { name: String(10) });

    user.click(btn);

    setTimeout(() => {
      const right = screen.getByTestId("right-arrow");
      expect(right).toBeDisabled();
    }, 500);
  });
});
