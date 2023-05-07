import { Flex, ListItem, OrderedList, Spinner } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";

export function PaymentPage() {
  const { isLoading, overview } = useAppState().payment;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Payments" />
      <OrderedList>
        {overview.map((i) => (
          <ListItem key={i.id}>
            {i.title} - {i.email} - {i.paymentDate} - ${i.paymentAmount}
          </ListItem>
        ))}
      </OrderedList>
    </Flex>
  );
}
