import { apiDelete, apiGet, apiPost, apiPut } from "../../../api";

export const api = {
  getGenres: async () => apiGet({ url: "genres" }),

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
    genre,
    token,
  }: {
    id: string;
    genre: string;
    token: string;
  }) => apiPut({ url: `genres/${id}`, token, body: { genre } }),
};
