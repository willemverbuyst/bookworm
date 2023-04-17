import { BaseStateSelect } from "./State";

interface Country {
  id: string;
  country: string;
}

export type CountryState = BaseStateSelect<Country>;
