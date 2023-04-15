import { apiGet } from "../../../api";

export const api = {
  getAuthors: async ({ limit = 10, page = 1 }) =>
    apiGet({ url: `authors/?limit=${limit}&page=${page}` }),

  getAuthorStatsPages: async () => apiGet({ url: "author/stats/?by=page" }),
};
