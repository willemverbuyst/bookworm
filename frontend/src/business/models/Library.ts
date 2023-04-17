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

export interface LibraryState extends BaseStateSelect<Library> {
  overview?: (Omit<Library, "postal_code"> & { postalCode: string })[] | null;
}
