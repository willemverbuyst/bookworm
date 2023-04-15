import { BaseState } from "./State";

export interface Language {
  id: string;
  language: string;
}

export type LanguageState = BaseState<Language>;
