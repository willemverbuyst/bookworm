import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import { Bookworm } from "../../../business/models/Bookworm";
import {
  stateSections,
  useActions,
  useAppState,
} from "../../../business/overmind";
import Pagination from "../../components/Table/Pagination";
import TableOverview from "../../components/Table/TableOverView";
import { useGetBooksworms } from "../../hooks/useGetBookworms";
import BookwormsDetails from "./BookwormsDetails";

function BookwormsTable() {
  useGetBooksworms();
  const { isLoading } = useAppState().app;
  const data = useAppState().bookworm.overview;
  const total = useAppState().bookworm.getAllApi?.total;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getBookWormById } = useActions().bookworm;

  const columns: Array<{ field: keyof Bookworm }> = [
    { field: "first_name" },
    { field: "last_name" },
    { field: "email" },
    { field: "phone" },
    { field: "user_is_active" },
    { field: "library_name" },
  ];

  const getUser = async (id: string) => {
    await getBookWormById({ id });
    onOpen();
  };

  if (isLoading) {
    return <Spinner />;
  }

  const stateSection = stateSections.bookworm;

  return (
    <Box>
      {data?.length ? (
        <>
          <BookwormsDetails isOpen={isOpen} onClose={onClose} />
          <TableOverview
            rows={data}
            columns={columns}
            title="overview of bookworms"
            action={getUser}
          />
          <Pagination total={total} state={stateSection} />
        </>
      ) : (
        <p>no bookworms</p>
      )}
    </Box>
  );
}

export default BookwormsTable;
