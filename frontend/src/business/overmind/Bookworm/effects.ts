import { apiGetWithZod } from "../../../api";
import {
  ApiResponseBookworm,
  ApiResponseBookWormById,
  ApiResponseBookwormStatsLibrary,
} from "../../models";

export const api = {
  getBookwormById: async (id: string) =>
    apiGetWithZod(`bookworms/${id}`, ApiResponseBookWormById),

  getBookworms: async ({
    limit = 10,
    page = 1,
    active,
  }: {
    limit: number;
    page: number;
    active: boolean;
  }) =>
    apiGetWithZod(
      `bookworms/?limit=${limit}&page=${page}&active=${active}`,
      ApiResponseBookworm
    ),

  getBookwormStatsibrary: () =>
    apiGetWithZod(
      "bookworms/stats/?by=library",
      ApiResponseBookwormStatsLibrary
    ),
};
