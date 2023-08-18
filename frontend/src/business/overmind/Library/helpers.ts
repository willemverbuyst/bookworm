import { ApiResponseLibrary } from "../../models";

export const returnLibraryObject = (
  library: ApiResponseLibrary["data"][0]
) => ({
  id: library.id,
  "name of library": library.name_of_library,
  phone: library.phone,
  address: library.address,
  postalCode: library.postal_code,
  city: library.city,
  country: library.country,
});
