import { apiGetWithZod } from "../../../api";
import { ApiResponseAuthor, ApiResponseAuthorStatsPage } from "../../models";

export const api = {
  getAuthors: async ({ limit = 10, page = 1 }) =>
    apiGetWithZod(`authors/?limit=${limit}&page=${page}`, ApiResponseAuthor),

  getAuthorStatsPages: async () =>
    apiGetWithZod("author/stats/?by=page", ApiResponseAuthorStatsPage),
};
