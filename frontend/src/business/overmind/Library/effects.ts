import { apiGetWithZod } from "../../../api";
import { ApiResponseLibrary, ApiResponseLibraryById } from "../../models";

export const api = {
  getLibraries: async () => apiGetWithZod("libraries", ApiResponseLibrary),

  getLibraryById: async (id: string) =>
    apiGetWithZod(`libraries/${id}`, ApiResponseLibraryById),
};
