import axios, { AxiosError } from "axios";
import { ApiResponseUser } from "../../models";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const api = {
  getUserByToken: async (
    token: string
  ): Promise<ApiResponseUser | AxiosError | null> => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/me`, {
        token,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(JSON.stringify(error.response));
        return error;
      }
      console.error(JSON.stringify(error));
      return null;
    }
  },

  getUser: async (
    email: string,
    password: string
  ): Promise<ApiResponseUser | AxiosError | null> => {
    try {
      const response = await axios.post(`${BACKEND_URL}/user/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        console.error(JSON.stringify(error.response));
        return error;
      }
      console.error(JSON.stringify(error));
      return null;
    }
  },
};
