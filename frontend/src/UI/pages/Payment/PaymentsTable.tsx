import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";

function PaymentsFilter() {
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

export function PaymentsTable() {
  const state = stateSectionsWithTable.payment;

  return (
    <Box>
      <PaymentsFilter />
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
