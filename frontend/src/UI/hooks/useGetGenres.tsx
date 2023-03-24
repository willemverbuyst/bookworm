import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetGenres() {
  const { genresApi } = useAppState();
  const { getGenres } = useActions();

  useEffect(() => {
    if (!genresApi?.data.length) {
      getGenres();
    }
  }, []);
}
