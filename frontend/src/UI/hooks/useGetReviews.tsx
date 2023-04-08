import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetReviews() {
  const { reviewsApi } = useAppState().review;
  const { getReviews } = useActions().review;

  useEffect(() => {
    if (!reviewsApi?.data.length) {
      getReviews({ limit: 3, page: 1 });
    }
  }, []);
}
