import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAllBooks() {
  const { booksApi } = useAppState();
  const { getAllBooks } = useActions();

  useEffect(() => {
    if (!booksApi?.data.length) {
      getAllBooks({ genre: null, language: null, limit: 10, page: 1 });
    }
  }, []);
}
