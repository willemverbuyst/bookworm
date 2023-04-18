import { BaseStateSelect, UI } from "./State";

interface Language {
  id: string;
  language: string;
}

export interface LanguageState extends BaseStateSelect<Language> {
  ui: UI<Language, null>;
}
