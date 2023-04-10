import { Box, Button, HStack } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

function Filter() {
  const { filter } = useAppState().bookworm.ui.table;
  const { setFilter } = useActions().bookworm;

  const handleClick = (f: boolean) => {
    setFilter({ filter: f });
  };

  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={filter ? "telegram" : "gray"}
          onClick={() => handleClick(true)}
        >
          Active
        </Button>
        <Button
          colorScheme={!filter ? "telegram" : "gray"}
          onClick={() => handleClick(false)}
        >
          Not Active
        </Button>
      </HStack>
    </Box>
  );
}

export default Filter;
