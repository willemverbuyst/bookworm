import { derived } from "overmind";
import { CountryState } from "../../models";

export const state: CountryState = {
  getAllApi: null,
  selectOptions: derived(({ getAllApi }: CountryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.country,
      value: i.id,
    }));
  }),
};
