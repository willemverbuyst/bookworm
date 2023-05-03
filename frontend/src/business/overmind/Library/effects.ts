import { apiGetWithZod } from "../../../api";
import { ApiResponseLibrary } from "../../models";

export const api = {
  getLibraries: async () => apiGetWithZod("libraries", ApiResponseLibrary),
};
