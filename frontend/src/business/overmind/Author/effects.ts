import axios from "axios";
import { ApiResponse } from "../../models/Api";
import { Author, AuthorStatsPage } from "../../models/Author";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getAuthors: async ({
    limit = 10,
    page = 1,
  }): Promise<ApiResponse<Array<Author>>> => {
    const response = await axios.get(
      `${BACKEND_URL}/authors/?limit=${limit}&page=${page}`
    );
    return response.data;
  },

  getAuthorStatsPages: async (): Promise<ApiResponse<AuthorStatsPage>> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/author/stats/?by=page`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
};
