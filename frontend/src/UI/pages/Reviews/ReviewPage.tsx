import { Box, Button, Flex, HStack, useId, VStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { calculateDays } from "../../../business/functions/date";
import { useAppState } from "../../../business/overmind";
import ControlledDatePicker from "../../components/Controllers/DatePicker";
import ControlledNumberInput from "../../components/Controllers/NumberInput";
import ControlledSelect from "../../components/Controllers/Select";
// import { useActions } from "../../../business/overmind";
import ControlledTextInput from "../../components/Controllers/TextInput";
import { useGetAllAuthors } from "../../hooks/useGetAllAuthors";
import { FormFields, defaultValues, validationSchema } from "./helpers";
import ControlledTextArea from "../../components/Controllers/TextArea";
import ControlledStarRating from "../../components/Controllers/StarRating";
import PageTitle from "../../components/Text/PageTitle";
import NavigationBar from "../../components/Navigation/NavigationBar";
import { useGetAllBooks } from "../../hooks/useGetAllBooks";

function ReviewPage() {
  const id = useId();
  const allAuthors = useAppState().allAuthors || [];
  const allBooks = useAppState().allBooks || [];
  const authorsForSelect = allAuthors?.map((a) => ({
    display: a.first_name,
    value: a.id,
  }));
  const [booksForSelect, setBooksForSelect] = useState<
    Array<{ display: string; value: string }>
  >([]);

  useGetAllAuthors();
  useGetAllBooks();
  // const { postReview } = useActions();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const [startDate, endDate, author] = watch([
    "startDate",
    "endDate",
    "author",
  ]);

  useEffect(() => {
    const numberOfDaysCalculated =
      startDate && endDate && calculateDays(endDate, startDate);
    if (startDate && endDate) {
      setValue("duration", numberOfDaysCalculated);
    }
  }, [setValue, startDate, endDate]);

  useEffect(() => {
    if (!author) {
      setBooksForSelect([]);
    }
    const booksToSelect = allBooks
      ?.filter((b) => String(b.author) === String(author))
      .map((b) => ({
        display: b.title,
        value: b.id,
      }));
    setBooksForSelect(booksToSelect);
  }, [author]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // await postReview(data);
    console.log(data);
    reset();
  };

  return (
    <>
      <NavigationBar />
      <Flex flexDirection="column" alignItems="center">
        <PageTitle title="Review" />

        <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={6}>
            <ControlledTextInput
              name="title"
              control={control}
              label="review title"
              error={errors.title}
              required
            />
            <ControlledSelect
              dataSet={authorsForSelect}
              name="author"
              control={control}
              label="author"
              error={errors.author}
              helperText="only known authors can be selected"
              required
            />
            <ControlledSelect
              dataSet={booksForSelect}
              name="book"
              control={control}
              label="book"
              error={errors.book}
              required
            />
            <HStack>
              <ControlledDatePicker
                name="startDate"
                control={control}
                label="startdate"
                error={errors.startDate}
                required
              />
              <ControlledDatePicker
                name="endDate"
                control={control}
                label="enddate"
                error={errors.endDate}
              />
              <ControlledNumberInput
                name="duration"
                control={control}
                label="duration"
                error={errors.duration}
              />
            </HStack>
            <ControlledTextArea
              name="description"
              control={control}
              label="description"
              error={errors.description}
            />
            <ControlledStarRating
              name="rating"
              control={control}
              label="rating"
              error={errors.rating}
              required
            />
            <Button type="submit" colorScheme="teal" size="sm">
              Submit
            </Button>
          </VStack>
        </Box>
        <DevTool control={control} />
        <Box />
      </Flex>
    </>
  );
}

export default ReviewPage;
