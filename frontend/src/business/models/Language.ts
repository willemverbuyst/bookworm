export interface Language {
  id: string;
  language: string;
}

export interface LanguageApi {
  status: string;
  data: Array<Language>;
  message: string;
}
