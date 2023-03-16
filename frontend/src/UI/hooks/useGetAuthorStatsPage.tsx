import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthorStatsPage() {
  const { authorStatsPageApi } = useAppState();
  const { getAuthorStatsPage } = useActions();

  useEffect(() => {
    if (!authorStatsPageApi.data.length) {
      getAuthorStatsPage();
    }
  }, []);
}
