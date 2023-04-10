import { Box, Button, HStack } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

function Filter() {
  const {
    filter: { returned },
  } = useAppState().rental.ui.table;
  const { setReturnedFilter } = useActions().rental;

  const handleClick = (f: string) => {
    setReturnedFilter({ returned: f });
  };

  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={returned === "not_returned" ? "telegram" : "gray"}
          onClick={() => handleClick("not_returned")}
        >
          Not Returned
        </Button>
        <Button
          colorScheme={returned === "returned" ? "telegram" : "gray"}
          onClick={() => handleClick("returned")}
        >
          Returned
        </Button>
        <Button
          colorScheme={returned === "all" ? "telegram" : "gray"}
          onClick={() => handleClick("all")}
        >
          All
        </Button>
      </HStack>
    </Box>
  );
}

export default Filter;
