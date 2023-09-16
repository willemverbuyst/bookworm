import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { UserDetails } from "../../components/Cards";
import { BookwormModal } from "../../components/Modal/BookwormModal";
import { Search, TableOverview } from "../../components/Table";
import { PageTitle } from "../../components/Text";
import { BookwormsChartLibraries } from "./BookwormsChartLibraries";

export function BookwormsFilter() {
  const {
    filter: { active },
  } = useAppState().bookworm.ui.table;
  const { changeActiveFilter } = useActions().bookworm;

  const handleClick = (f: boolean) => {
    changeActiveFilter({ active: f });
  };

  return (
    <Box mt={4}>
      <ButtonGroup size="sm" isAttached>
        <Button
          colorScheme={active ? "telegram" : "gray"}
          onClick={() => handleClick(true)}
        >
          Active
        </Button>
        <Button
          colorScheme={!active ? "telegram" : "gray"}
          onClick={() => handleClick(false)}
        >
          Not Active
        </Button>
      </ButtonGroup>
    </Box>
  );
}

function ShowDetailsButton({ id }: { id: string }) {
  const { getBookworm } = useActions().bookworm;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { bookwormDetailsApi } = useAppState().bookworm;
  const bookwormDetails = bookwormDetailsApi?.data;

  const getUser = async (i: string) => {
    await getBookworm({ id: i });
    onOpen();
  };

  return (
    <>
      <BookwormModal
        isOpen={isOpen}
        onClose={onClose}
        header="Bookworm"
        modalBody={bookwormDetails ? <UserDetails /> : null}
      />
      <IconButton
        data-tooltip-id="bookworm-tooltip"
        data-tooltip-content="Show details"
        aria-label="Show details"
        onClick={() => getUser(id)}
        icon={<ViewIcon />}
        mx={1}
        variant="unstyled"
      />
    </>
  );
}

export function BookwormsPage() {
  const state = stateSectionsWithTable.bookworm;

  return (
    <Flex flexDirection="column" alignItems="center">
      <PageTitle title="Bookworms" />
      <Tabs variant="soft-rounded" colorScheme="teal" align="center">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Libraries</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box>
              <BookwormsFilter />
              <Search state={state} />
              <TableOverview
                actionButtons={[ShowDetailsButton]}
                state={state}
              />
            </Box>
          </TabPanel>
          <TabPanel>
            <BookwormsChartLibraries />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
