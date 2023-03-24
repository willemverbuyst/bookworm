import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetLanguages() {
  const { languagesApi } = useAppState();
  const { getLanguages } = useActions();

  useEffect(() => {
    if (!languagesApi?.data.length) {
      getLanguages();
    }
  }, []);
}
