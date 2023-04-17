import { apiGet } from "../../../api";

export const api = {
  getCountries: async () => apiGet({ url: "countries" }),
};
