import { derived } from "overmind";
import { Language } from "../../models/Language";
import { BaseState } from "../../models/State";

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
