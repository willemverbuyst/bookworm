import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import { Rental, RentalStatsDuration } from "../../models/Rental";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getRentals: async ({
    limit = 10,
    page = 1,
    filter,
  }: {
    limit: number;
    page: number;
    filter: string;
  }): Promise<ApiResponse<Array<Rental>>> => {
    let url = `${BACKEND_URL}/rentals/?limit=${limit}&page=${page}`;

    if (filter === "returned") {
      url += "&filter=returned";
    }

    if (filter === "not_returned") {
      url += "&filter=not_returned";
    }

    const response = await axiosGet({ url });
    return response;
  },

  getRentalStatsDuration: async (): Promise<
    ApiResponse<Array<RentalStatsDuration>>
  > => {
    const url = `${BACKEND_URL}/rentals/stats/?by=duration`;

    const response = await axiosGet({ url });
    return response;
  },
};
