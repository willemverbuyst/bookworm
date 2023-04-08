import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsLanguage() {
  const { statsLanguageApi } = useAppState().book;
  const { getBookStatsLanguage } = useActions().book;

  useEffect(() => {
    if (!statsLanguageApi?.data.length) {
      getBookStatsLanguage();
    }
  }, []);
}
