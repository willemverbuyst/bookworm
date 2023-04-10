import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetRentals() {
  const { getAllApi, ui } = useAppState().rental;
  const { getRentals } = useActions().rental;
  const { limit, page, filter } = ui.table;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getRentals({ limit, page, filter });
    }
  }, []);
}
