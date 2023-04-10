import { Box, Button, HStack } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

function Filter() {
  const { filter } = useAppState().bookworm.ui.table;
  const { setFilter } = useActions().bookworm;

  const handleClick = (f: string) => {
    setFilter({ filter: f });
  };

  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={filter === "active" ? "telegram" : "gray"}
          onClick={() => handleClick("active")}
        >
          Active
        </Button>
        <Button
          colorScheme={filter === "not_active" ? "telegram" : "gray"}
          onClick={() => handleClick("not_active")}
        >
          Not Active
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
