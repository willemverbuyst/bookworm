import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetRentalStatsDuration() {
  const { rentalStatsDurationApi } = useAppState().rental;
  const { getRentalStatsDuration } = useActions().rental;

  useEffect(() => {
    if (!rentalStatsDurationApi?.data.length) {
      getRentalStatsDuration();
    }
  }, []);
}
