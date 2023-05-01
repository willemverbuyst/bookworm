import { apiDelete, apiGet, apiPost, apiPut } from "../../../api";

export const api = {
  getLanguages: async () => apiGet({ url: "languages" }),

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
    nameOfLanguage,
    token,
  }: {
    id: string;
    nameOfLanguage: string;
    token: string;
  }) =>
    apiPut({
      url: `languages/${id}`,
      token,
      body: { name_of_language: nameOfLanguage },
    }),
};
