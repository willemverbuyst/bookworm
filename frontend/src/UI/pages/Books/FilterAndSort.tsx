import { Box, Button, HStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useId } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useActions, useAppState } from "../../../business/overmind";
import ControlledSelect from "../../components/Controllers/Select";

import { defaultValues, FormFields, validationSchema } from "./helpers";

function FilterAndSort() {
  const id = useId();
  const allGenres = useAppState().genresOverview || [];
  const allLanguages = useAppState().languagesOverview || [];
  const { getAllBooks } = useActions();
  const genresForSelect = allGenres.map((g) => ({
    value: g.id,
    display: g.genre,
  }));
  const languagesForSelect = allLanguages.map((l) => ({
    value: l.id,
    display: l.language,
  }));

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async ({ genre, language }) => {
    getAllBooks({ genre, language });
  };

  return (
    <Box as="form" id={id} onSubmit={handleSubmit(onSubmit)} m={10}>
      <HStack spacing={6}>
        <ControlledSelect
          dataSet={genresForSelect}
          name="genre"
          control={control}
          error={errors.genre}
          placeholder="genre"
        />
        <ControlledSelect
          dataSet={languagesForSelect}
          name="language"
          control={control}
          error={errors.language}
          placeholder="language"
        />
        <Button type="submit" colorScheme="teal" size="md" px={10}>
          Search
        </Button>
      </HStack>
    </Box>
  );
}

export default FilterAndSort;
