import { FormControl, Input } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

export function BookwormsSearch() {
  const {
    ui: {
      table: { queryString },
    },
  } = useAppState().bookworm;
  const { search } = useActions().bookworm;

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
