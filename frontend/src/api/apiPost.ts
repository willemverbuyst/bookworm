import { axiosPost } from "./axiosCRUD";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

export const apiPost = async ({
  url,
  token,
  body,
}: {
  url: string;
  token: string;
  body: Record<string, unknown>;
}) => {
  const response = await axiosPost({
    url: `${BACKEND_URL}/${url}`,
    token,
    body,
  });
  return response;
};
