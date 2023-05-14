import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

export function BookwormsFilter() {
  const {
    filter: { active },
  } = useAppState().bookworm.ui.table;
  const { changeActiveFilter } = useActions().bookworm;

  const handleClick = (f: boolean) => {
    changeActiveFilter({ active: f });
  };

  return (
    <Box mt={4}>
      <ButtonGroup size="sm" isAttached>
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
      </ButtonGroup>
    </Box>
  );
}
