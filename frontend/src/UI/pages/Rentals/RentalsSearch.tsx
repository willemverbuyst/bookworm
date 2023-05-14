import { FormControl, Input } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

export function RentalsSearch() {
  const {
    ui: {
      table: { queryString },
    },
  } = useAppState().rental;
  const { search } = useActions().rental;

  const searchInTable = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <FormControl>
      <Input
        id="search"
        placeholder="search"
        value={queryString}
        onChange={(e) => searchInTable(e)}
        mt={5}
      />
    </FormControl>
  );
}
