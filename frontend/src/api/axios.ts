import axios, { AxiosError } from "axios";

export const axiosGet = async ({ url }: { url: string }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(JSON.stringify(error.response));
      return error;
    }
    console.error(JSON.stringify(error));
    return null;
  }
};
