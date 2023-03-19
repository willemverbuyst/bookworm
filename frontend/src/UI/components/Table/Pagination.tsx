import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, HStack, Spacer } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import ControlledSelect from "../Controllers/Select";

interface FormFields {
  numberOfItemsPerPage: string;
}

interface Props {
  total: number | undefined;
  limit: number;
  updateLimit: Dispatch<SetStateAction<number>>;
  updatePage: Dispatch<SetStateAction<number>>;
}

function Pagination({ total, limit, updateLimit, updatePage }: Props) {
  const id = useId();
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumberOfPages = total ? Math.ceil(total / limit) : 0;

  const { control, watch } = useForm<FormFields>({
    defaultValues: { numberOfItemsPerPage: "10" },
  });
  const dataSet = [5, 10, 15, 20, 25, 30].map((i) => ({
    value: String(i),
    display: String(i),
  }));

  const numberOfItemsPerPage = watch("numberOfItemsPerPage");

  useEffect(() => {
    updateLimit(Number(numberOfItemsPerPage));
  }, [numberOfItemsPerPage]);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    updatePage(pageNumber);
  };

  const handleClickLeft = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const handleClickRight = () => {
    if (currentPage === totalNumberOfPages) return;
    setCurrentPage((prev) => prev + 1);
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

  const valueBtnOne = 1;
  const valueBtnTwo = 2;
  const valueBtnThree = calculateValue(3);
  const valueBtnFour = calculateValue(4);
  const valueBtnFive = calculateValue(5);
  const valueBtnSix = totalNumberOfPages - 1;
  const valueBtnSeven = totalNumberOfPages;

  return (
    <Container centerContent mt={5}>
      {totalNumberOfPages > 7 ? (
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
            colorScheme={currentPage === valueBtnOne ? "blue" : "gray"}
          >
            {valueBtnOne}
          </Button>
          {currentPage < 5 ? (
            <Button
              type="button"
              onClick={() => handleClick(valueBtnTwo)}
              colorScheme={currentPage === valueBtnTwo ? "blue" : "gray"}
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
            colorScheme={currentPage === valueBtnThree ? "blue" : "gray"}
          >
            {valueBtnThree}
          </Button>
          <Button
            type="button"
            onClick={() => handleClick(valueBtnFour)}
            colorScheme={currentPage === valueBtnFour ? "blue" : "gray"}
          >
            {valueBtnFour}
          </Button>
          <Button
            type="button"
            onClick={() => handleClick(valueBtnFive)}
            colorScheme={currentPage === valueBtnFive ? "blue" : "gray"}
          >
            {valueBtnFive}
          </Button>
          {currentPage > totalNumberOfPages - 4 ? (
            <Button
              type="button"
              onClick={() => handleClick(valueBtnSix)}
              colorScheme={currentPage === valueBtnSix ? "blue" : "gray"}
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
            colorScheme={currentPage === valueBtnSeven ? "blue" : "gray"}
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
      ) : (
        <Box>
          {[...Array(totalNumberOfPages).keys()].map((b) => (
            <Button
              type="button"
              onClick={() => handleClick(b + 1)}
              key={b}
              colorScheme={currentPage === b + 1 ? "blue" : "gray"}
            >
              {b + 1}
            </Button>
          ))}
        </Box>
      )}
      <Box as="form" id={id} mt={5}>
        <ControlledSelect
          dataSet={dataSet}
          name="numberOfItemsPerPage"
          control={control}
          label="items per page"
        />
      </Box>
    </Container>
  );
}

export default Pagination;
