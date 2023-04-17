import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Select,
  Spacer,
} from "@chakra-ui/react";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";

interface Props {
  total: number | undefined;
  state: keyof typeof stateSectionsWithTable;
}

export function Pagination({ total, state }: Props) {
  const {
    limit,
    page: currentPage,
    showAll,
  } = useAppState()[state].ui.table || {};
  const { setLimit, setPage, setShowAll } = useActions()[state];

  const totalNumberOfPages = total ? Math.ceil(total / limit) : 0;
  const dataSet = [5, 10, 15, 20, 25, 30].map((i) => ({
    value: String(i),
    display: String(i),
  }));

  const handleClick = (pageNumber: number) => {
    setPage({ page: pageNumber });
  };

  const handleClickLeft = () => {
    if (currentPage === 1) return;
    setPage({ page: currentPage - 1 });
  };

  const handleClickRight = () => {
    if (currentPage === totalNumberOfPages) return;
    setPage({ page: currentPage + 1 });
  };

  const calculateValue = (btnNumber: number) => {
    if (currentPage > totalNumberOfPages - 4) {
      return totalNumberOfPages + btnNumber - 7;
    }

    if (currentPage < 5) {
      return btnNumber;
    }

    return currentPage + btnNumber - 4;
  };

  const handleBtnClick = () => {
    if (total && !showAll) {
      setShowAll({ showAll: true });
    } else if (total && showAll) {
      setShowAll({ showAll: false });
      setLimit({ limit });
      setPage({ page: 1 });
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit({ limit: Number(e.target.value) });
  };

  const valueBtnOne = 1;
  const valueBtnTwo = 2;
  const valueBtnThree = calculateValue(3);
  const valueBtnFour = calculateValue(4);
  const valueBtnFive = calculateValue(5);
  const valueBtnSix = totalNumberOfPages - 1;
  const valueBtnSeven = totalNumberOfPages;

  return (
    <Container centerContent mt={5}>
      {!showAll && totalNumberOfPages > 7 && (
        <HStack>
          <Button
            type="button"
            isDisabled={currentPage === 1}
            variant={currentPage === 1 ? "ghost" : "solid"}
            color={currentPage === 1 ? "gray" : "gray.800"}
            onClick={handleClickLeft}
            data-testid="left-arrow"
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            type="button"
            onClick={() => handleClick(valueBtnOne)}
            colorScheme={currentPage === valueBtnOne ? "telegram" : "gray"}
          >
            {valueBtnOne}
          </Button>
          {currentPage < 5 ? (
            <Button
              type="button"
              onClick={() => handleClick(valueBtnTwo)}
              colorScheme={currentPage === valueBtnTwo ? "telegram" : "gray"}
            >
              {valueBtnTwo}
            </Button>
          ) : (
            <>
              <Spacer />
              <p>...</p>
              <Spacer />
            </>
          )}
          <Button
            type="button"
            onClick={() => handleClick(valueBtnThree)}
            colorScheme={currentPage === valueBtnThree ? "telegram" : "gray"}
          >
            {valueBtnThree}
          </Button>
          <Button
            type="button"
            onClick={() => handleClick(valueBtnFour)}
            colorScheme={currentPage === valueBtnFour ? "telegram" : "gray"}
          >
            {valueBtnFour}
          </Button>
          <Button
            type="button"
            onClick={() => handleClick(valueBtnFive)}
            colorScheme={currentPage === valueBtnFive ? "telegram" : "gray"}
          >
            {valueBtnFive}
          </Button>
          {currentPage > totalNumberOfPages - 4 ? (
            <Button
              type="button"
              onClick={() => handleClick(valueBtnSix)}
              colorScheme={currentPage === valueBtnSix ? "telegram" : "gray"}
            >
              {valueBtnSix}
            </Button>
          ) : (
            <>
              <Spacer />
              <p>...</p>
              <Spacer />
            </>
          )}
          <Button
            type="button"
            onClick={() => handleClick(valueBtnSeven)}
            colorScheme={currentPage === valueBtnSeven ? "telegram" : "gray"}
          >
            {valueBtnSeven}
          </Button>
          <Button
            type="button"
            isDisabled={currentPage === totalNumberOfPages}
            variant={currentPage === totalNumberOfPages ? "ghost" : "solid"}
            color={currentPage === totalNumberOfPages ? "gray" : "gray.800"}
            onClick={handleClickRight}
            data-testid="right-arrow"
          >
            <ArrowRightIcon />
          </Button>
        </HStack>
      )}
      {!showAll && totalNumberOfPages <= 7 && totalNumberOfPages > 1 && (
        <Box>
          {[...Array(totalNumberOfPages).keys()].map((b) => (
            <Button
              type="button"
              onClick={() => handleClick(b + 1)}
              key={b}
              colorScheme={currentPage === b + 1 ? "telegram" : "gray"}
            >
              {b + 1}
            </Button>
          ))}
        </Box>
      )}
      <Box mt={5}>
        <Flex align="end">
          {!showAll && (
            <Select defaultValue={limit} onChange={handleSelect}>
              {dataSet.map((d) => (
                <option key={JSON.stringify(d)} value={d.value}>
                  {d.display}
                </option>
              ))}
            </Select>
          )}
          {total && (
            <Button onClick={handleBtnClick} ml={2} px={7} variant="outline">
              {!showAll ? "Show all" : "Use pagination"}
            </Button>
          )}
        </Flex>
      </Box>
    </Container>
  );
}
