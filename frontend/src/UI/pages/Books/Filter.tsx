import { Box, FormControl, HStack, Select } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";
import { Label } from "../../components/Text";

function Filter() {
  const allGenres = useAppState().genre.overview || [];
  const allLanguages = useAppState().language.overview || [];
  const {
    filter: { genre, language },
  } = useAppState().book.ui.table;
  const { setGenreFilter, setLanguageFilter } = useActions().book;
  const genresForSelect = allGenres.map((g) => ({
    value: g.id,
    display: g.genre,
  }));
  const languagesForSelect = allLanguages.map((l) => ({
    value: l.id,
    display: l.language,
  }));

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenreFilter({ genre: e.target.value });
  };

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageFilter({ language: e.target.value });
  };

  return (
    <Box mt={4}>
      <HStack spacing={6}>
        <FormControl>
          <Label text="Genre" isRequired={false} />
          <Select onChange={handleSelectGenre} value={genre}>
            <option value="">All</option>
            {genresForSelect.map((d) => (
              <option key={JSON.stringify(d)} value={d.value}>
                {d.display}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <Label text="Language" isRequired={false} />
          <Select onChange={handleSelectLanguage} value={language}>
            <option value="">All</option>
            {languagesForSelect.map((d) => (
              <option key={JSON.stringify(d)} value={d.value}>
                {d.display}
              </option>
            ))}
          </Select>
        </FormControl>
      </HStack>
    </Box>
  );
}

export default Filter;
