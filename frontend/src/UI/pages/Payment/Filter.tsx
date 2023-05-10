import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";
import { Label } from "../../components/Text";

export function Filter() {
  const {
    filter: { amount },
  } = useAppState().payment.ui.table;
  const { changeAmountFilter } = useActions().payment;

  const handleClick = (f: number) => {
    changeAmountFilter({ amount: f });
  };

  return (
    <Box mt={4}>
      <Label text="amount" />
      <ButtonGroup size="sm" isAttached>
        <Button
          colorScheme={amount === 1 ? "telegram" : "gray"}
          onClick={() => handleClick(1)}
        >
          {"< 1"}
        </Button>
        <Button
          colorScheme={amount === 2 ? "telegram" : "gray"}
          onClick={() => handleClick(2)}
        >
          {"< 2"}
        </Button>
        <Button
          colorScheme={amount === 3 ? "telegram" : "gray"}
          onClick={() => handleClick(3)}
        >
          {"< 3"}
        </Button>
        <Button
          colorScheme={amount === 4 ? "telegram" : "gray"}
          onClick={() => handleClick(4)}
        >
          {"< 4"}
        </Button>
        <Button
          colorScheme={amount === 5 ? "telegram" : "gray"}
          onClick={() => handleClick(5)}
        >
          {"< 5"}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
