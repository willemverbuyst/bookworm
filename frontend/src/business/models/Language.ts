import { BaseState } from "./State";

interface Language {
  id: string;
  language: string;
}

export type LanguageState = BaseState<Language>;
