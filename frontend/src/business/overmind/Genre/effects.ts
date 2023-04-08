import axios from "axios";
import { ApiResponse } from "../../models/Api";
import { Genre } from "../../models/Genre";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getGenres: async (): Promise<ApiResponse<Array<Genre>>> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/genres`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
};
