import { Box, FormControl, HStack, Select } from "@chakra-ui/react";
import { useActions, useAppState } from "../../../business/overmind";
import { Label } from "../../components/Text";

export function BooksFilter() {
  const genresForSelect = useAppState().genre.selectOptions || [];
  const languagesForSelect = useAppState().language.selectOptions || [];
  const {
    filter: { genre, language },
  } = useAppState().book.ui.table;
  const { changeGenreFilter, changeLanguageFilter } = useActions().book;

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeGenreFilter({ genre: e.target.value });
  };

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguageFilter({ language: e.target.value });
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
