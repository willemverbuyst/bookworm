import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetGenres() {
  const { genresApi } = useAppState().genre;
  const { getGenres } = useActions().genre;

  useEffect(() => {
    if (!genresApi?.data.length) {
      getGenres();
    }
  }, []);
}
