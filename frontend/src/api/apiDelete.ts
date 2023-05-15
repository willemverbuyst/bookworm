import { BACKEND_URL } from "../config";
import { axiosDelete } from "./axiosCRUD";

export const apiDelete = async ({ url }: { url: string }) => {
  const response = await axiosDelete({ url: `${BACKEND_URL}/${url}` });
  return response;
};
