import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import { Genre } from "../../models/Genre";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getGenres: async (): Promise<ApiResponse<Array<Genre>>> => {
    const url = `${BACKEND_URL}/genres`;

    const response = await axiosGet({ url });
    return response;
  },
};
