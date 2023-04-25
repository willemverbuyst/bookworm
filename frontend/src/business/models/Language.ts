import { BaseStateSelect, UI } from "./State";

interface Language {
  id: string;
  language: string;
}

export interface LanguageDisplay {
  id: string;
  name: string;
}

export interface LanguageState
  extends BaseStateSelect<Language, LanguageDisplay> {
  ui: UI<LanguageDisplay, null>;
}
