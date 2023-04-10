import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetRentalStatsDuration() {
  const { statsDurationApi } = useAppState().rental;
  const { getRentalStatsDuration } = useActions().rental;

  useEffect(() => {
    if (!statsDurationApi?.data.length) {
      getRentalStatsDuration();
    }
  }, []);
}
