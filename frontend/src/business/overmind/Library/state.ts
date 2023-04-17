import { derived } from "overmind";
import { LibraryState } from "../../models";

export const state: LibraryState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      id: i.id,
      library: i.library,
      phone: i.phone,
      address: i.address,
      postalCode: i.postal_code,
      city: i.city,
      country: i.country,
    }));
  }),
  selectOptions: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.library,
      value: i.id,
    }));
  }),
};
