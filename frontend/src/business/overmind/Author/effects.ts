import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import { Author, AuthorStatsPage } from "../../models/Author";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getAuthors: async ({
    limit = 10,
    page = 1,
  }): Promise<ApiResponse<Array<Author>>> => {
    const url = `${BACKEND_URL}/authors/?limit=${limit}&page=${page}`;

    const response = await axiosGet({ url });
    return response;
  },

  getAuthorStatsPages: async (): Promise<ApiResponse<AuthorStatsPage>> => {
    const url = `${BACKEND_URL}/author/stats/?by=page`;

    const response = await axiosGet({ url });
    return response;
  },
};
