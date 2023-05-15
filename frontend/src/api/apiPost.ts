import { BACKEND_URL } from "../config";
import { axiosPost } from "./axiosCRUD";

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
