import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsGenre() {
  const { bookStatsGenreApi } = useAppState().book;
  const { getBookStatsGenre } = useActions().book;

  useEffect(() => {
    if (!bookStatsGenreApi?.data.length) {
      getBookStatsGenre();
    }
  }, []);
}
