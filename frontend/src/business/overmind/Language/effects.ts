import { apiGet } from "../../../api/apiGet";

export const api = {
  getLanguages: async () => apiGet({ url: "languages" }),
};
