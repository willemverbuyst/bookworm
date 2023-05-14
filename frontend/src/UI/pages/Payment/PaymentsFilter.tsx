import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";

export function PaymentsFilter() {
  const {
    filter: { amount },
  } = useAppState().payment.ui.table;
  const { changeAmountFilter } = useActions().payment;

  const handleClick = (f: number) => {
    changeAmountFilter({ amount: f });
  };

  return (
    <Box mt={4}>
      <ButtonGroup size="sm">
        {[...Array(5).keys()].map((i) => (
          <Button
            key={i}
            colorScheme="teal"
            onClick={() => handleClick(i + 1)}
            variant={amount === i + 1 ? "solid" : "outline"}
          >
            {`amount < ${i + 1}`}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
}
