import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetReviews() {
  const { reviewsApi } = useAppState();
  const { getReviews } = useActions();

  useEffect(() => {
    if (!reviewsApi?.data.length) {
      getReviews({ limit: 5, page: 1 });
    }
  }, []);
}
