import { apiGetWithZod } from "../../../api";
import { ApiResponseCountry } from "../../models";

export const api = {
  getCountries: async () => apiGetWithZod("countries", ApiResponseCountry),
};
