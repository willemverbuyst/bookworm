import { apiGet } from "../../../api/apiGet";

export const api = {
  getBookwormById: async (id: string) => apiGet({ url: `bookworms/${id}` }),

  getBookworms: async ({
    limit = 10,
    page = 1,
    filter,
  }: {
    limit: number;
    page: number;
    filter: boolean;
  }) =>
    apiGet({ url: `bookworms/?limit=${limit}&page=${page}&active=${filter}` }),
};
