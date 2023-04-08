import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetLanguages() {
  const { languagesApi } = useAppState().language;
  const { getLanguages } = useActions().language;

  useEffect(() => {
    if (!languagesApi?.data.length) {
      getLanguages();
    }
  }, []);
}
