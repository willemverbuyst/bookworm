import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetAllGenres() {
  const { genresApi } = useAppState();
  const { getAllGenres } = useActions();

  useEffect(() => {
    if (!genresApi?.data.length) {
      getAllGenres();
    }
  }, []);
}
