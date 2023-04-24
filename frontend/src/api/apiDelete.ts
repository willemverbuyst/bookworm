import { axiosDelete } from "./axiosCRUD";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const apiGet = async ({ url }: { url: string }) => {
  const response = await axiosDelete({ url: `${BACKEND_URL}/${url}` });
  return response;
};
