import { z, ZodType } from "zod";
import { axiosGet, axiosGetWithZod } from "./axiosCRUD";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const apiGet = async ({ url }: { url: string }) => {
  const response = await axiosGet({ url: `${BACKEND_URL}/${url}` });
  return response;
};

export const apiGetWithZod = async <T extends ZodType>(
  url: string,
  schema: T
): Promise<z.infer<T>> => {
  const response = await axiosGetWithZod({
    url: `${BACKEND_URL}/${url}`,
    schema,
  });
  return response;
};
