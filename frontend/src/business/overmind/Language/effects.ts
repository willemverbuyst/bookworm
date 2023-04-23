import { apiGet } from "../../../api";
import { apiPost } from "../../../api/apiPost";

export const api = {
  getLanguages: async () => apiGet({ url: "languages" }),

  postLanguage: async ({
    language,
    token,
  }: {
    language: string;
    token: string;
  }) => apiPost({ url: "languages", token, body: { language } }),
};
