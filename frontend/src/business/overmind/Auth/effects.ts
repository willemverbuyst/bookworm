import axios, { AxiosError } from "axios";
import { BACKEND_URL } from "../../../config/environment";
import { ApiResponseUser } from "../../models";

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
