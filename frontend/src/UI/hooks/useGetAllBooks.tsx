import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export default function useGetAllBooks() {
  const { booksApi } = useAppState();
  const { getAllBooks } = useActions();

  useEffect(() => {
    if (!booksApi.data.length) {
      getAllBooks();
    }
  }, []);
}
