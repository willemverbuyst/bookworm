import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsGenre() {
  const { bookStatsGenreApi } = useAppState();
  const { getBookStatsGenre } = useActions();

  useEffect(() => {
    if (!bookStatsGenreApi.data.length) {
      getBookStatsGenre();
    }
  }, []);
}
