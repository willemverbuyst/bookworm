import { render, screen } from "@testing-library/react";
import { createOvermindMock } from "overmind";
import { Provider } from "overmind-react";
import { vi } from "vitest";
import { config } from "../../../business/overmind";
import ReviewPage from "./ReviewPage";

vi.mock("../../components/Navigation/NavigationBar", () => {
  const NavigationBar = vi.fn();
  return { default: NavigationBar };
});

describe("ReviewPage", () => {
  test("should display a title", () => {
    const overmind = createOvermindMock(config, (state) => {
      // eslint-disable-next-line no-param-reassign
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
      // eslint-disable-next-line no-param-reassign
      state.booksApi = {
        status: "ok",
        data: [
          {
            id: "abc123",
            title: "test_title_one",
            language: "test_language_one",
            author: "test_author_one",
            year_published: 1900,
            genre: "genre_1",
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
