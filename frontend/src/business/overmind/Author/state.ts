import { derived } from "overmind";
import { AuthorState } from "../../models/State";

export const state: AuthorState = {
  getAllApiResponse: null,
  overview: derived(({ getAllApiResponse }: AuthorState) => {
    if (!getAllApiResponse?.data.length) {
      return null;
    }
    return getAllApiResponse.data
      .map((author) => ({
        ...author,
      }))
      .sort((author1, author2) =>
        `${author1.last_name}`.localeCompare(author2.last_name)
      );
  }),
  authorStatsPage: derived(({ authorStatsPageApi }: AuthorState) => {
    if (!authorStatsPageApi?.data.pages_per_author.length) {
      return null;
    }
    return {
      pages_per_author: authorStatsPageApi.data.pages_per_author,
      average_pages: authorStatsPageApi.data.average_pages,
    };
  }),
  authorStatsPageApi: null,
};
