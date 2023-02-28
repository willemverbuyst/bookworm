import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { config } from "../../../business/overmind";
import ReviewPage from "./reviewPage";

describe("Review page", () => {
  test("should display a title", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
      state.authorsApi = {
        status: "ok",
        data: [
          {
            id: "abc123",
            name: "test_title_one",
            books_written: 1,
          },
        ],
        message: "testing",
      };
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
        <ReviewPage />
      </Provider>
    );

    const heading = screen.getByRole("heading", {
      name: /review/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
