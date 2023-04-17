import { BaseStateSelect } from "./State";

interface CountryApi {
  id: string;
  country: string;
}

interface CountryDisplay {
  value: string;
  display: string;
}

export type CountryState = BaseStateSelect<CountryApi, CountryDisplay>;
