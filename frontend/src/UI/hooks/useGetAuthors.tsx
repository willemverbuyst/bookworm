import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthors() {
  const { authorsApi } = useAppState().author;
  const { getAuthors } = useActions().author;

  useEffect(() => {
    if (!authorsApi?.data.length) getAuthors({ limit: 10, page: 1 });
  }, []);
}
