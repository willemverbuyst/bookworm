import { BACKEND_URL } from "../config";
import { axiosPut } from "./axiosCRUD";

export const apiPut = async ({
  url,
  token,
  body,
}: {
  url: string;
  token: string;
  body: Record<string, unknown>;
}) => {
  const response = await axiosPut({
    url: `${BACKEND_URL}/${url}`,
    token,
    body,
  });
  return response;
};
