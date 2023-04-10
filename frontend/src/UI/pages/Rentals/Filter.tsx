import { Box, Button, HStack } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

function Filter() {
  const { filter } = useAppState().rental.ui.table;
  const { setFilter } = useActions().rental;

  const handleClick = (f: string) => {
    setFilter({ filter: f });
  };

  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={filter === "not_returned" ? "telegram" : "gray"}
          onClick={() => handleClick("not_returned")}
        >
          Not Returned
        </Button>
        <Button
          colorScheme={filter === "returned" ? "telegram" : "gray"}
          onClick={() => handleClick("returned")}
        >
          Returned
        </Button>
        <Button
          colorScheme={filter === "all" ? "telegram" : "gray"}
          onClick={() => handleClick("all")}
        >
          All
        </Button>
      </HStack>
    </Box>
  );
}

export default Filter;
