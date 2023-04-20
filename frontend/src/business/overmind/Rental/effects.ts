import { apiGet } from "../../../api";

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

    return apiGet({ url });
  },

  getRentalStatsDay: async () => apiGet({ url: "rentals/stats/?by=day" }),

  getRentalStatsDuration: async () =>
    apiGet({ url: "rentals/stats/?by=duration" }),
};
