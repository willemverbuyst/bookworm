import axios from "axios";
import { GenreApi } from "../../models/Genre";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getGenres: async (): Promise<GenreApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/genres`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
};
