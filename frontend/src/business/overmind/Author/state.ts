import { derived } from "overmind";
import { AuthorState } from "../../models";

export const state: AuthorState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: AuthorState) => {
    if (!getAllApi?.data.length) {
      return [];
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
      pages_per_author: [...statsPageApi.data.pages_per_author].map((d) => ({
        name: d.author,
        number: Number(d.number_of_pages),
        book: Number(d.number_of_books),
        avg: statsPageApi.data.average_pages,
      })),
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
      filter: null,
      limit: 10,
      noDataMessage: "no authors",
      page: 1,
      queryString: "",
      searchKeys: ["last_name", "first_name"],
      showAll: false,
      title: "overview of authors",
    },
  },
};
