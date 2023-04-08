import { Box, Button, Spinner } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { useAppState } from "../../../business/overmind";
import UserDetails from "../../components/Cards/UserDetails";

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
    <Box>
      {showDetails && (
        <Button
          colorScheme="telegram"
          onClick={() => updateShowDetails(!showDetails)}
        >
          Hide details
        </Button>
      )}
      {showDetails && bookwormDetails && <UserDetails user={bookwormDetails} />}
    </Box>
  );
}

export default BookwormsDetails;
