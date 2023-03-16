import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAllLanguages() {
  const { languagesApi } = useAppState();
  const { getAllLanguages } = useActions();

  useEffect(() => {
    if (!languagesApi?.data.length) {
      getAllLanguages();
    }
  }, []);
}
