import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookwormStatsLibrary() {
  const { statsLibraryApi } = useAppState().bookworm;
  const { getBookwormStatsLibrary } = useActions().bookworm;

  useEffect(() => {
    if (!statsLibraryApi?.data.length) {
      getBookwormStatsLibrary();
    }
  }, []);
}
