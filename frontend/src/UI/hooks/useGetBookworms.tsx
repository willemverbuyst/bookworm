import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBooksworms() {
  const { bookwormApi } = useAppState();
  const { getBookworms } = useActions();

  useEffect(() => {
    if (!bookwormApi?.data.length) {
      getBookworms({ limit: 10, page: 1 });
    }
  }, []);
}
