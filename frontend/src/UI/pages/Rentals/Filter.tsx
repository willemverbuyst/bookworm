import { Box, Button, HStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  filter: string;
  updateFilter: Dispatch<SetStateAction<string>>;
}

function Filter({ filter, updateFilter }: Props) {
  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={filter === "not_returned" ? "telegram" : "gray"}
          onClick={() => updateFilter("not_returned")}
        >
          Not Returned
        </Button>
        <Button
          colorScheme={filter === "returned" ? "telegram" : "gray"}
          onClick={() => updateFilter("returned")}
        >
          Returned
        </Button>
        <Button
          colorScheme={filter === "all" ? "telegram" : "gray"}
          onClick={() => updateFilter("all")}
        >
          All
        </Button>
      </HStack>
    </Box>
  );
}

export default Filter;
