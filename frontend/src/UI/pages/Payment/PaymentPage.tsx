import { Box, Flex, Input, List, ListItem, Spinner } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";

export function PaymentPage() {
  const { isLoading, overview } = useAppState().payment;
  const { search } = useActions().payment;

  if (isLoading) {
    return <Spinner />;
  }

  const searchInPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    search({ queryString: e.target.value });
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Payments" />
      <Box>
        <Input onChange={searchInPage} placeholder="search" my={5} />
        <List>
          {overview.map((i) => (
            <ListItem key={i.id}>
              {i.title}|{i.email}|{i.paymentDate}|${i.paymentAmount}
            </ListItem>
          ))}
        </List>
      </Box>
    </Flex>
  );
}
