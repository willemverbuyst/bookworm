import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { SortDirection } from "../../../business/models/State";
import { useActions, useAppState } from "../../../business/overmind";

export function Sort() {
  const { sort } = useAppState().payment.ui.table;
  const { setSort } = useActions().payment;

  return (
    <Box mt={4}>
      <ButtonGroup size="sm">
        <Button
          colorScheme="pink"
          variant={
            sort?.property === "title" &&
            sort?.sortDirection === SortDirection.ASCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "title",
              sortDirection: SortDirection.ASCENDING,
            })
          }
          rightIcon={<TriangleDownIcon />}
        >
          title
        </Button>
        <Button
          colorScheme="pink"
          variant={
            sort?.property === "title" &&
            sort?.sortDirection === SortDirection.DESCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "title",
              sortDirection: SortDirection.DESCENDING,
            })
          }
          rightIcon={<TriangleUpIcon />}
        >
          title
        </Button>

        <Button
          colorScheme="pink"
          variant={
            sort.property === "email" &&
            sort?.sortDirection === SortDirection.ASCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "email",
              sortDirection: SortDirection.ASCENDING,
            })
          }
          rightIcon={<TriangleDownIcon />}
        >
          email
        </Button>
        <Button
          colorScheme="pink"
          variant={
            sort?.property === "email" &&
            sort?.sortDirection === SortDirection.DESCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "email",
              sortDirection: SortDirection.DESCENDING,
            })
          }
          rightIcon={<TriangleUpIcon />}
        >
          email
        </Button>

        <Button
          colorScheme="pink"
          variant={
            sort?.property === "date" &&
            sort?.sortDirection === SortDirection.ASCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "date",
              sortDirection: SortDirection.ASCENDING,
            })
          }
          rightIcon={<TriangleDownIcon />}
        >
          date
        </Button>
        <Button
          colorScheme="pink"
          variant={
            sort?.property === "date" &&
            sort?.sortDirection === SortDirection.DESCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "date",
              sortDirection: SortDirection.DESCENDING,
            })
          }
          rightIcon={<TriangleUpIcon />}
        >
          date
        </Button>

        <Button
          colorScheme="pink"
          variant={
            sort?.property === "amount" &&
            sort?.sortDirection === SortDirection.ASCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "amount",
              sortDirection: SortDirection.ASCENDING,
            })
          }
          rightIcon={<TriangleDownIcon />}
        >
          amount
        </Button>
        <Button
          colorScheme="pink"
          variant={
            sort?.property === "amount" &&
            sort?.sortDirection === SortDirection.DESCENDING
              ? "solid"
              : "outline"
          }
          onClick={() =>
            setSort({
              property: "amount",
              sortDirection: SortDirection.DESCENDING,
            })
          }
          rightIcon={<TriangleUpIcon />}
        >
          amount
        </Button>
      </ButtonGroup>
    </Box>
  );
}
