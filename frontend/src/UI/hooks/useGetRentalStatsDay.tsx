import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetRentalStatsDay() {
  const { statsDayApi } = useAppState().rental;
  const { getRentalStatsDay } = useActions().rental;

  useEffect(() => {
    if (!statsDayApi?.data.length) {
      getRentalStatsDay();
    }
  }, []);
}
