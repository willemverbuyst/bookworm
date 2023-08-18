import { LibraryData } from "../../models";

export const returnLibraryObject = (library: LibraryData) => ({
  id: library.id,
  "name of library": library.name_of_library,
  phone: library.phone,
  address: library.address,
  postalCode: library.postal_code,
  city: library.city,
  country: library.country,
});
