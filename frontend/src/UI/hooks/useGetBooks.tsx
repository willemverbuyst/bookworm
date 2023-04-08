import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBooks() {
  const { booksApi } = useAppState().book;
  const { getBooks } = useActions().book;

  useEffect(() => {
    if (!booksApi?.data.length) {
      getBooks({ genre: null, language: null, limit: 10, page: 1 });
    }
  }, []);
}
