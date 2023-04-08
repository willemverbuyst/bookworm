import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsYearPublished() {
  const { bookStatsYearPublishedApi } = useAppState().book;
  const { getBookStatsYearPublished } = useActions().book;

  useEffect(() => {
    if (!bookStatsYearPublishedApi?.data.length) {
      getBookStatsYearPublished();
    }
  }, []);
}
