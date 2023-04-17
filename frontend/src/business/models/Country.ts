import { BaseState } from "./State";

interface Country {
  id: string;
  language: string;
}

export type CountryState = BaseState<Country>;
