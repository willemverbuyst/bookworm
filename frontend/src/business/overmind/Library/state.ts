import { derived } from "overmind";
import { LibraryState } from "../../models/Library";

export const state: LibraryState = {
  getAllApi: null,
  overview: derived(({ getAllApi }: LibraryState) => {
    if (!getAllApi?.data.length) {
      return null;
    }
    return getAllApi.data.map((i) => ({
      display: i.library,
      value: i.id,
    }));
  }),
};
