import { Box, HStack } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { useAppState } from "../../../business/overmind";
import ControlledSelect from "../../components/Controllers/Select";
import { defaultValues, FormFields, validationSchema } from "./helpers";

interface Props {
  updateGenre: Dispatch<SetStateAction<string | null>>;
  updateLanguage: Dispatch<SetStateAction<string | null>>;
  updatePage: Dispatch<SetStateAction<number>>;
}

function FilterAndSort({ updateGenre, updateLanguage, updatePage }: Props) {
  const id = useId();
  const allGenres = useAppState().genresOverview || [];
  const allLanguages = useAppState().languagesOverview || [];
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
    watch,
  } = useForm<FormFields>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const [genre, language] = watch(["genre", "language"]);

  useEffect(() => {
    if (genre && genre === "all") {
      updateGenre(null);
    } else if (genre) {
      updateGenre(genre);
    }

    if (language && language === "all") {
      updateLanguage(null);
    } else if (language) {
      updateLanguage(language);
    }
    updatePage(1);
  }, [genre, language]);

  return (
    <Box as="form" id={id} m={10}>
      <HStack spacing={6}>
        <ControlledSelect
          dataSet={genresForSelect}
          name="genre"
          control={control}
          error={errors.genre}
          placeholder="genre"
          allOption
        />
        <ControlledSelect
          dataSet={languagesForSelect}
          name="language"
          control={control}
          error={errors.language}
          placeholder="language"
          allOption
        />
      </HStack>
    </Box>
  );
}

export default FilterAndSort;
