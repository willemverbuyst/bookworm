import { apiGetWithZod } from "../../../api";
import {
  ApiResponseRental,
  ApiResponseRentalStatsDay,
  ApiResponseRentalStatsDuration,
} from "../../models";

export const api = {
  getRentals: async ({
    limit = 10,
    page = 1,
    returned,
  }: {
    limit: number;
    page: number;
    returned?: string;
  }) => {
    let url = `rentals/?limit=${limit}&page=${page}`;

    if (returned === "returned") {
      url += "&filter=returned";
    }

    if (returned === "not_returned") {
      url += "&filter=not_returned";
    }

    return apiGetWithZod(url, ApiResponseRental);
  },

  getRentalStatsDay: async () =>
    apiGetWithZod("rentals/stats/?by=day", ApiResponseRentalStatsDay),

  getRentalStatsDuration: async () =>
    apiGetWithZod("rentals/stats/?by=duration", ApiResponseRentalStatsDuration),
};
