import { apiGet } from "../../../api";

export const api = {
  getLanguages: async () => apiGet({ url: "languages" }),
};
