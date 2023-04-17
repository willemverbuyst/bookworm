import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetLibraries() {
  const { getAllApi } = useAppState().library;
  const { getLibraries } = useActions().library;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getLibraries();
    }
  }, []);
}
