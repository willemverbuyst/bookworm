import { apiGet } from "../../../api";

export const api = {
  getRentals: async ({
    limit = 10,
    page = 1,
    filter,
  }: {
    limit: number;
    page: number;
    filter: string;
  }) => {
    let url = `rentals/?limit=${limit}&page=${page}`;

    if (filter === "returned") {
      url += "&filter=returned";
    }

    if (filter === "not_returned") {
      url += "&filter=not_returned";
    }

    return apiGet({ url });
  },

  getRentalStatsDuration: async () =>
    apiGet({ url: "rentals/stats/?by=duration" }),
};
