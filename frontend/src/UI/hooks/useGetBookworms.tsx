import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBooksworms() {
  const { bookwormApi } = useAppState().bookworm;
  const { getBookworms } = useActions().bookworm;

  useEffect(() => {
    if (!bookwormApi?.data.length) {
      getBookworms({ limit: 10, page: 1 });
    }
  }, []);
}
