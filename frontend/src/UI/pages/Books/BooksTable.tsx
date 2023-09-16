import { Box, FormControl, HStack, Select } from "@chakra-ui/react";
import { SelectOption } from "../../../business/models/SelectOption";
import {
  stateSectionsWithTable,
  useActions,
  useAppState,
} from "../../../business/overmind";
import { Search, TableOverview } from "../../components/Table";
import { Label } from "../../components/Text";

function GenreOptions() {
  const genresForSelect = useAppState().genre.selectOptions || [];

  const { getOption } = useActions().genre;

  const options = genresForSelect
    .map((i) => getOption({ id: i }))
    .filter(Boolean) as Array<SelectOption>;

  return (
    <>
      {options.map((d) => (
        <option key={JSON.stringify(d)} value={d.value}>
          {d.display}
        </option>
      ))}
    </>
  );
}

function GenreFilter() {
  const { genre } = useAppState((state) => state.book.ui.table.filter);
  const { changeGenreFilter } = useActions().book;

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeGenreFilter({ genre: e.target.value });
  };

  return (
    <FormControl>
      <Label text="Genre" isRequired={false} />
      <Select onChange={handleSelectGenre} value={genre}>
        <option value="">All</option>
        <GenreOptions />
      </Select>
    </FormControl>
  );
}

function LanguageFilter() {
  const languagesForSelect = useAppState().language.selectOptions || [];
  const { language } = useAppState((state) => state.book.ui.table.filter);
  const { changeLanguageFilter } = useActions().book;

  const handleSelectLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguageFilter({ language: e.target.value });
  };

  return (
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
  );
}

export function BooksTable() {
  const state = stateSectionsWithTable.book;

  return (
    <Box>
      <Box mt={4}>
        <HStack spacing={6}>
          <GenreFilter />
          <LanguageFilter />
        </HStack>
      </Box>
      <Search state={state} />
      <TableOverview state={state} />
    </Box>
  );
}
