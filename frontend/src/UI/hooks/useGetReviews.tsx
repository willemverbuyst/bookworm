import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetReviews() {
  const { getAllApi } = useAppState().review;
  const { getReviews } = useActions().review;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getReviews({ limit: 3, page: 1 });
    }
  }, []);
}
