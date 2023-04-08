import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthors() {
  const { getAllApi } = useAppState().author;
  const { getAuthors } = useActions().author;

  useEffect(() => {
    if (!getAllApi?.data.length) getAuthors({ limit: 10, page: 1 });
  }, []);
}
