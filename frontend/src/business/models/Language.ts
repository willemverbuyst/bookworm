export interface Language {
  id: string;
  language: string;
}

export interface LanguageApi {
  status: string;
  result: number;
  data: Array<Language>;
  total: number;
  message: string;
}
