import { apiGet } from "../../../api/apiGet";

export const api = {
  getGenres: async () => apiGet({ url: "genres" }),
};
