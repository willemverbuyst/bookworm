import { axiosPut } from "./axiosCRUD";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

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
