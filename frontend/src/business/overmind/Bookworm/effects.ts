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
    filter: string;
  }) => {
    let url = `bookworms/?limit=${limit}&page=${page}`;

    if (filter === "active") {
      url += "&filter=active";
    }

    if (filter === "not_active") {
      url += "&filter=not_active";
    }

    return apiGet({ url });
  },
};
