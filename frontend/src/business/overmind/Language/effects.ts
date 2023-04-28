import { apiGet, apiPut } from "../../../api";
import { apiDelete } from "../../../api/apiDelete";
import { apiPost } from "../../../api/apiPost";

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
    language,
    token,
  }: {
    id: string;
    language: string;
    token: string;
  }) => apiPut({ url: `languages/${id}`, token, body: { language } }),
};
