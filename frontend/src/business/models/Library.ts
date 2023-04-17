import { BaseStateSelect } from "./State";

interface Library {
  id: string;
  library: string;
  phone: string;
  address: string;
  postal_code: string;
  city: string;
  country: string;
}

export type LibraryState = BaseStateSelect<Library>;
