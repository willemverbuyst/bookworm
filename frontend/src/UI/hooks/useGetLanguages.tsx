import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetLanguages() {
  const { getAllApi } = useAppState().language;
  const { getLanguages } = useActions().language;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getLanguages();
    }
  }, []);
}
