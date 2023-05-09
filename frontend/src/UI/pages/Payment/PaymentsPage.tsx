import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";
import { PaymentsTable } from "./PamentsTable";

export function PaymentsPage() {
  const { isLoading } = useAppState().payment;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Payments" />
      <Box>
        <PaymentsTable />
      </Box>
    </Flex>
  );
}
