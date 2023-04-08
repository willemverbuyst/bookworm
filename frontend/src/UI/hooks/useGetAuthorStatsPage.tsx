import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthorStatsPage() {
  const { authorStatsPageApi } = useAppState().author;
  const { getAuthorStatsPage } = useActions().author;

  useEffect(() => {
    if (!authorStatsPageApi?.data.pages_per_author.length) {
      getAuthorStatsPage();
    }
  }, []);
}
