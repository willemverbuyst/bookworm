import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsYearPublished() {
  const { bookStatsYearPublishedApi } = useAppState();
  const { getBookStatsYearPublished } = useActions();

  useEffect(() => {
    if (!bookStatsYearPublishedApi?.data.length) {
      getBookStatsYearPublished();
    }
  }, []);
}
