import { derived } from "overmind";
import { CountryState } from "../../models";

export const state: CountryState = {
  isLoading: false,
  getAllApi: null,
  selectOptions: derived(({ getAllApi }: CountryState) => {
    if (!getAllApi?.data.length) {
      return [];
    }
    return getAllApi.data.map((i) => ({
      display: i.country,
      value: i.id,
    }));
  }),
};
