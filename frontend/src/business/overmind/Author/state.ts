import { derived } from "overmind";
import { AuthorState } from "../../models/State";

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
};
