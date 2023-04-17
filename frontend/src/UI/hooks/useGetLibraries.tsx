import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGeLibraries() {
  const { getAllApi } = useAppState().library;
  const { getLibraries } = useActions().library;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getLibraries();
    }
  }, []);
}
