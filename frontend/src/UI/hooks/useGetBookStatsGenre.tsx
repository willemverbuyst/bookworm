import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsGenre() {
  const { statsGenreApi } = useAppState().book;
  const { getBookStatsGenre } = useActions().book;

  useEffect(() => {
    if (!statsGenreApi?.data.length) {
      getBookStatsGenre();
    }
  }, []);
}
