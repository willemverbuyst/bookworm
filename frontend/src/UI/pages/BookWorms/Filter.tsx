import { Box, Button, HStack } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

function Filter() {
  const {
    filter: { active },
  } = useAppState().bookworm.ui.table;
  const { setActiveFilter } = useActions().bookworm;

  const handleClick = (f: boolean) => {
    setActiveFilter({ active: f });
  };

  return (
    <Box mt={4}>
      <HStack>
        <Button
          colorScheme={active ? "telegram" : "gray"}
          onClick={() => handleClick(true)}
        >
          Active
        </Button>
        <Button
          colorScheme={!active ? "telegram" : "gray"}
          onClick={() => handleClick(false)}
        >
          Not Active
        </Button>
      </HStack>
    </Box>
  );
}

export default Filter;
