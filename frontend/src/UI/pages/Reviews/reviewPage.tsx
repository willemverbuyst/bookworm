import {
  Box,
  Button,
  Container,
  Heading,
  useId,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { calculateDays } from "../../../business/functions/date";
import { useAppState } from "../../../business/overmind";
import { ControlledDatePicker } from "../../components/Controllers/DatePicker";
import { ControlledNumberInput } from "../../components/Controllers/NumberInput";
import { ControlledSelect } from "../../components/Controllers/Select";
// import { useActions } from "../../../business/overmind";
import { ControlledTextInput } from "../../components/Controllers/TextInput";
import useGetAllAuthors from "../../hooks/useGetAllAuthors";
import { FormFields, defaultValues, validationSchema } from "./helpers";
import { ControlledTextArea } from "../../components/Controllers";
import StarRating, {
  ControlledStarRating,
} from "../../components/Controllers/StarRating";

export default function ReviewPage() {
  const id = useId();
  const allAuthors = useAppState().allAuthors || [];
  const authorsForSelect = allAuthors?.map((a) => ({
    display: a.name,
    value: a.id,
  }));

  useGetAllAuthors();
  // const { postReview } = useActions();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
    watch,
    register,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const [startDate, endDate] = watch(["startDate", "endDate"]);

  const numberOfDaysCalculated =
    startDate && endDate && calculateDays(endDate, startDate);

  useEffect(() => {
    if (startDate && endDate) {
      setValue("duration", numberOfDaysCalculated);
    }
  }, [setValue, startDate, endDate]);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // await postReview(data);
    console.log(data);
    reset();
  };

  return (
    <Container centerContent>
      <Box>
        <Heading as="h1" size="lg">
          Review
        </Heading>
      </Box>

      <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
        <VStack m={4}>
          <ControlledTextInput
            name="bookTitle"
            control={control}
            label="book title"
            error={errors.bookTitle}
          />
          <ControlledSelect
            dataSet={authorsForSelect}
            name="author"
            control={control}
            label="country"
            error={errors.author}
            helperText="only known authors can be selected"
          />
          <ControlledDatePicker
            name="startDate"
            control={control}
            label="startdate"
            error={errors.startDate}
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
          />
          <Button type="submit" colorScheme="teal" size="sm">
            Submit
          </Button>
        </VStack>
      </Box>
      <DevTool control={control} />
      <Box />
    </Container>
  );
}
