import { apiDelete, apiGetWithZod, apiPost, apiPut } from "../../../api";
import { ApiResponseLanguage } from "../../models";

export const api = {
  getLanguages: async () => apiGetWithZod("languages", ApiResponseLanguage),

  postLanguages: async ({
    languages,
    token,
  }: {
    languages: { nameOfLanguage: string }[];
    token: string;
  }) =>
    apiPost({
      url: "languages",
      token,
      body: {
        languages: languages.map((l) => ({
          name_of_language: l.nameOfLanguage,
        })),
      },
    }),

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
  }) =>
    apiPut({
      url: `languages/${id}`,
      token,
      body: { name_of_language: name },
    }),
};
