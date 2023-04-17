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

export type LibraryDetails = Omit<Library, "postal_code"> & {
  postalCode: string;
};

export interface LibraryState extends BaseStateSelect<Library> {
  overview?: LibraryDetails[] | null;
}
