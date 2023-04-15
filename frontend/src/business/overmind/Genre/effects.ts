import { apiGet } from "../../../api";

export const api = {
  getGenres: async () => apiGet({ url: "genres" }),
};
