import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsLanguage() {
  const { bookStatsLanguageApi } = useAppState();
  const { getBookStatsLanguage } = useActions();

  useEffect(() => {
    if (!bookStatsLanguageApi?.data.length) {
      getBookStatsLanguage();
    }
  }, []);
}
