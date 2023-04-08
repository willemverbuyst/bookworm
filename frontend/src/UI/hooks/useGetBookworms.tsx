import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBooksworms() {
  const { getAllApi } = useAppState().bookworm;
  const { getBookworms } = useActions().bookworm;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getBookworms({ limit: 10, page: 1 });
    }
  }, []);
}
