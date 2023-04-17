import { apiGet } from "../../../api";

export const api = {
  getLibraries: async () => apiGet({ url: "languages" }),
};
