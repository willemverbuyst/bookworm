import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useActions } from "../../../business/overmind";
import NavigationBar from "../../components/Navigation/NavigationBar";
import PageTitle from "../../components/Text/PageTitle";
import BookwormsDetails from "./BookwormsDetails";
import BookwormsTable from "./BookwormsTable";

function BookwormsPage() {
  const [showDetails, setShowDetails] = useState(false);
  const { getBookWormById } = useActions().bookworm;

  const getUser = async (id: string) => {
    await getBookWormById({ id });
    setShowDetails(true);
  };

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Bookworms" />
        <BookwormsDetails
          showDetails={showDetails}
          updateShowDetails={setShowDetails}
        />
        <BookwormsTable action={getUser} />
      </Flex>
    </>
  );
}
export default BookwormsPage;
