import { Box, Button, Container, HStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppState } from "../../../business/overmind";
import ControlledSelect from "../../components/Controllers/Select";
import { defaultValues, FormFields, validationSchema } from "./helpers";

function FilterAndSort() {
  const id = useId();
  const allGenres = useAppState().allGenres || [];
  const genresForSelect = allGenres.map((g) => ({
    value: g.id,
    display: g.genre,
  }));

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    // await postReview(data);
    console.log(data);
    reset();
  };

  return (
    <Container centerContent m={10}>
      <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)}>
        <HStack spacing={6}>
          <ControlledSelect
            dataSet={genresForSelect}
            name="genre"
            control={control}
            error={errors.genre}
            placeholder="genre"
          />
          {/* <ControlledSelect
          dataSet={lanugageForSelect}
          name="language"
          control={control}
          label="language"
          error={errors.language}
          required
        /> */}
          <Button type="submit" colorScheme="teal" size="sm">
            Submit
          </Button>
        </HStack>
      </Box>
    </Container>
  );
}

export default FilterAndSort;
