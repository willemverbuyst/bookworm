import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBooks() {
  const { getAllApi, ui } = useAppState().book;
  const { getBooks } = useActions().book;
  const { limit, page } = ui.table;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getBooks({ genre: null, language: null, limit, page });
    }
  }, []);
}
