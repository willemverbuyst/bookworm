import { apiDelete, apiGetWithZod, apiPost, apiPut } from "../../../api";
import { ApiResponseGenre } from "../../models";

export const api = {
  getGenres: async () => apiGetWithZod("genres", ApiResponseGenre),

  postGenres: async ({
    genres,
    token,
  }: {
    genres: { name: string }[];
    token: string;
  }) => apiPost({ url: "genres", token, body: { genres } }),

  deleteGenre: async ({ id }: { id: string }) =>
    apiDelete({ url: `genres?id=${id}` }),

  putGenre: async ({
    id,
    name,
    token,
  }: {
    id: string;
    name: string;
    token: string;
  }) => apiPut({ url: `genres/${id}`, token, body: { name } }),
};
