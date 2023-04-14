import { derived } from "overmind";
import { BaseState } from "../../models/State";

export interface Language {
  id: string;
  language: string;
}

export type LanguageState = BaseState<Language>;

export const state: LanguageState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: LanguageState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
