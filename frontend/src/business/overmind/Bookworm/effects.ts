import axios from "axios";
import { ApiResponse } from "../../models/Api";
import { Bookworm } from "../../models/Bookworm";
import { UserApi } from "../../models/User";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getBookwormById: async (id: string): Promise<Omit<UserApi, "token">> => {
    const response = await axios.get(`${BACKEND_URL}/bookworms/${id}`);
    return response.data;
  },

  getBookworms: async ({
    limit = 10,
    page = 1,
  }): Promise<ApiResponse<Array<Bookworm>>> => {
    const response = await axios.get(
      `${BACKEND_URL}/bookworms/?limit=${limit}&page=${page}`
    );
    return response.data;
  },
};
