import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";
import { Label } from "../../components/Text";

export function Sort() {
  const {
    sort: { email },
  } = useAppState().payment.ui.table;
  const { changeSort } = useActions().payment;

  const handleClick = (f: string) => {
    changeSort({ email: f });
  };

  return (
    <Box mt={4}>
      <Label text="amount" />
      <ButtonGroup size="sm" isAttached>
        <Button
          colorScheme={email === "ascending" ? "telegram" : "gray"}
          onClick={() => handleClick("ascending")}
        >
          ASCENDING
        </Button>
        <Button
          colorScheme={email === "descending" ? "telegram" : "gray"}
          onClick={() => handleClick("descending")}
        >
          DESCENDING
        </Button>
      </ButtonGroup>
    </Box>
  );
}
