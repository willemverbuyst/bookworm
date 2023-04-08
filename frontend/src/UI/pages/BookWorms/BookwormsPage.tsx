import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useActions, useAppState } from "../../../business/overmind";
import UserDetails from "../../components/Cards/UserDetails";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";
import Warning from "../../components/Text/Warning";
import BookwormsTable from "./BookwormsTable";

function BookwormsPage() {
  const [showDetails, setShowDetails] = useState(false);
  const { bookwormDetailsApi } = useAppState().bookworm;
  const { getBookWormById } = useActions().bookworm;
  const bookwormDetails = bookwormDetailsApi?.data;

  const getUser = async (id: string) => {
    await getBookWormById({ id });
    setShowDetails(true);
  };

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Bookworms" />
        <Box>
          <Button
            colorScheme="telegram"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? "Hide details" : "Show details"}
          </Button>
        </Box>
        {showDetails && !bookwormDetails && <Warning text="select bookworm" />}
        {showDetails && bookwormDetails && (
          <Box m={5}>
            <UserDetails user={bookwormDetails} />
          </Box>
        )}
        <BookwormsTable action={getUser} />
      </Flex>
    </>
  );
}
export default BookwormsPage;
