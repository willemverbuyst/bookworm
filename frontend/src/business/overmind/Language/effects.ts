import axios from "axios";
import { LanguageApi } from "../../models/Language";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getLanguages: async (): Promise<LanguageApi> => {
    try {
      const response = await axios.get(`${BACKEND_URL}/languages`);
      return response.data;
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  },
};
