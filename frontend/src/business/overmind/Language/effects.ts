import { axiosGet } from "../../../api/axios";
import { ApiResponse } from "../../models/Api";
import { Language } from "../../models/Language";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getLanguages: async (): Promise<ApiResponse<Array<Language>>> => {
    const url = `${BACKEND_URL}/languages`;

    const response = await axiosGet({ url });
    return response;
  },
};
