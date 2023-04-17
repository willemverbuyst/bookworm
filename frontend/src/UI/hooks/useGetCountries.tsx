import { useEffect } from "react";
import { useActions, useAppState } from "../../business/overmind";

export function useGetCountries() {
  const { getAllApi } = useAppState().country;
  const { getCountries } = useActions().country;

  useEffect(() => {
    if (!getAllApi?.data.length) {
      getCountries();
    }
  }, []);
}
