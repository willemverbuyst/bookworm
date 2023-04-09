import { Context } from "..";
import { genericSearch } from "../../functions/genericSearch";

export const searching = (
  { actions, state }: Context,
  { str }: { str: string }
) => {
  actions.author.setQueryString({ queryString: str });
  // TODO, HAS TO BE A SEARCH IN DB
  if (state.author.getAllApi?.data && state.author.getAllApi.data?.length) {
    const filteredOverview = [...state.author.getAllApi.data].filter((a) =>
      genericSearch(a, ["last_name", "first_name"], str, false)
    );
    // eslint-disable-next-line no-param-reassign
    state.author.overview = filteredOverview;
  }
};
