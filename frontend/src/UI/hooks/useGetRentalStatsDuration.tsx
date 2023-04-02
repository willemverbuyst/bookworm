import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetRentalStatsDuration() {
  const { rentalStatsDurationApi } = useAppState();
  const { getRentalStatsDuration } = useActions();

  useEffect(() => {
    if (!rentalStatsDurationApi?.data.length) {
      getRentalStatsDuration();
    }
  }, []);
}
