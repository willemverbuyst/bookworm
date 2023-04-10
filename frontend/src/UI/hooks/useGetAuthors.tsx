import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAuthors() {
  const { getAllApi, ui } = useAppState().author;
  const { getAuthors } = useActions().author;
  const { limit, page } = ui.table;

  useEffect(() => {
    if (!getAllApi?.data.length) getAuthors({ limit, page });
  }, []);
}
