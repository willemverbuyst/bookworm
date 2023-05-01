import { BaseStateSelect, UI } from "./State";

interface Language {
  id: string;
  name_of_language: string;
}

export interface LanguageDisplay {
  id: string;
  nameOfLanguage: string;
}

export interface LanguageState
  extends BaseStateSelect<Language, LanguageDisplay> {
  ui: UI<LanguageDisplay, null>;
}
