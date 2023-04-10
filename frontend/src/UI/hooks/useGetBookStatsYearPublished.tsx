import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetBookStatsYearPublished() {
  const { statsYearPublishedApi } = useAppState().book;
  const { getBookStatsYearPublished } = useActions().book;

  useEffect(() => {
    if (!statsYearPublishedApi?.data.length) {
      getBookStatsYearPublished();
    }
  }, []);
}
