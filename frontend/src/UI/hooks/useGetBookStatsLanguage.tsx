import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsLanguage() {
  const { bookStatsLanguageApi } = useAppState().book;
  const { getBookStatsLanguage } = useActions().book;

  useEffect(() => {
    if (!bookStatsLanguageApi?.data.length) {
      getBookStatsLanguage();
    }
  }, []);
}
