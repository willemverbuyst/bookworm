import { FormControl, Input } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";

interface Props {
  state: keyof typeof stateSectionsWithTable;
}

export function Search({ state }: Props) {
  const {
    ui: {
      table: { queryString },
    },
  } = useAppState()[state];
  const { search } = useActions()[state];

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
