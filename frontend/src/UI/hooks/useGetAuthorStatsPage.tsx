import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthorStatsPage() {
  const { statsPageApi } = useAppState().author;
  const { getAuthorStatsPage } = useActions().author;

  useEffect(() => {
    if (!statsPageApi?.data.pages_per_author.length) {
      getAuthorStatsPage();
    }
  }, []);
}
