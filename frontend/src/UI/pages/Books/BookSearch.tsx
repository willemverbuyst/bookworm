import { FormControl, Input } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

export function BookSearch() {
  const {
    ui: {
      table: { queryString },
    },
  } = useAppState().book;
  const { search } = useActions().book;

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
