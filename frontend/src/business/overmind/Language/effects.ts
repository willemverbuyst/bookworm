import { apiDelete, apiGet, apiPost, apiPut } from "../../../api";

export const api = {
  getLanguages: async () => apiGet({ url: "languages" }),

  postLanguages: async ({
    languages,
    token,
  }: {
    languages: { name: string }[];
    token: string;
  }) => apiPost({ url: "languages", token, body: { languages } }),

  deleteLanguage: async ({ id }: { id: string }) =>
    apiDelete({ url: `languages?id=${id}` }),

  putLanguage: async ({
    id,
    name,
    token,
  }: {
    id: string;
    name: string;
    token: string;
  }) => apiPut({ url: `languages/${id}`, token, body: { name } }),
};
