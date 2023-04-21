import { apiGet } from "../../../api";

export const api = {
  getBookwormById: async (id: string) => apiGet({ url: `bookworms/${id}` }),

  getBookworms: async ({
    limit = 10,
    page = 1,
    active,
  }: {
    limit: number;
    page: number;
    active: boolean;
  }) =>
    apiGet({ url: `bookworms/?limit=${limit}&page=${page}&active=${active}` }),

  getBookwormStatsibrary: () => apiGet({ url: "bookworms/stats/?by=library" }),
};
