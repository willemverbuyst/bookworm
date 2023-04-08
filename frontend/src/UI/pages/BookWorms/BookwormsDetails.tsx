import { Box, Button, Spinner } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useAppState } from "../../../business/overmind";
import UserDetails from "../../components/Cards/UserDetails";
import Warning from "../../components/Text/Warning";

interface Props {
  showDetails: boolean;
  updateShowDetails: Dispatch<SetStateAction<boolean>>;
}

function BookwormsDetails({ showDetails, updateShowDetails }: Props) {
  const { isLoading } = useAppState().app;
  const { bookwormDetailsApi } = useAppState().bookworm;
  const bookwormDetails = bookwormDetailsApi?.data;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Box>
        <Button
          colorScheme="telegram"
          onClick={() => updateShowDetails(!showDetails)}
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
    </>
  );
}

export default BookwormsDetails;
