import { derived } from "overmind";
import { CountryState } from "../../models/Country";

export const state: CountryState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: CountryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data;
  }),
};
