import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetGenres() {
  const { getAllApi } = useAppState().genre;
  const { getGenres } = useActions().genre;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getGenres();
    }
  }, []);
}
