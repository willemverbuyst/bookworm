import { BaseStateSelect } from "./State";

interface Language {
  id: string;
  language: string;
}

export type LanguageState = BaseStateSelect<Language>;
