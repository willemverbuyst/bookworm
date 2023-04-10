import { derived } from "overmind";
import { ApiResponse } from "../../models/Api";
import { Author, AuthorStatsPage } from "../../models/Author";
import { BaseState } from "../../models/State";

export interface AuthorState extends BaseState<Author> {
  statsPage: AuthorStatsPage | null;
  statsPageApi: ApiResponse<AuthorStatsPage> | null;
  ui: {
    table: {
      columns: Array<{ field: keyof Author; isNumeric?: boolean }>;
      limit: number;
      page: number;
      queryString: string;
      showAll: boolean;
    };
  };
}

export const state: AuthorState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: AuthorState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data
      .map((author) => ({
        ...author,
      }))
      .sort((author1, author2) =>
        `${author1.last_name}`.localeCompare(author2.last_name)
      );
  }),
  statsPage: derived(({ statsPageApi }: AuthorState) => {
    if (!statsPageApi?.data.pages_per_author.length) {
      return null;
    }
    return {
      pages_per_author: statsPageApi.data.pages_per_author,
      average_pages: statsPageApi.data.average_pages,
    };
  }),
  statsPageApi: null,
  ui: {
    table: {
      columns: [
        { field: "last_name" },
        { field: "first_name" },
        { field: "books_written", isNumeric: true },
      ],
      limit: 10,
      page: 1,
      queryString: "",
      showAll: false,
    },
  },
};
