import { Flex, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";

export function PaymentPage() {
  const { isLoading } = useAppState().payment;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Payments" />
    </Flex>
  );
}
