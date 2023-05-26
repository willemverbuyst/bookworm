import { Box, Button, Flex, HStack, useId, VStack } from "@chakra-ui/react";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { functions } from "../../../business/functions";
import { useActions, useAppState } from "../../../business/overmind";
import {
  ControlledDatePicker,
  ControlledNumberInput,
  ControlledSelect,
  ControlledSelectWithSearch,
  ControlledStarRating,
  ControlledTextArea,
  ControlledTextInput,
} from "../../components/Controllers";
// import { useActions } from "../../../business/overmind";
import { PageTitle } from "../../components/Text";
import { defaultValues, FormFields, validationSchema } from "./helpers";

export function AddReviewPage() {
  const id = useId();
  const { booksByAuthorForReview } = useAppState().review;
  const { getAuthors, getBooksForAuthor } = useActions().review;
  const booksForSelect = booksByAuthorForReview.map((i) => ({
    value: i.id,
    display: i.title,
  }));

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
      startDate && endDate && functions.calculateDays(endDate, startDate);
    if (startDate && endDate) {
      setValue("duration", numberOfDaysCalculated);
    }
  }, [setValue, startDate, endDate]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // await postReview(data);
    console.log(data);
    reset();
  };

  useEffect(() => {
    getBooksForAuthor({ authorId: author.value });
  }, [author]);

  return (
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
          <ControlledSelectWithSearch
            name="author"
            control={control}
            label="author"
            error={errors.author?.value}
            required
            action={getAuthors}
          />
          <ControlledSelect
            dataSet={booksForSelect}
            name="book"
            control={control}
            label="book"
            error={errors.book?.value}
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
  );
}
