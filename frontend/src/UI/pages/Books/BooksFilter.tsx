import { FormControl, Select } from "@chakra-ui/react";
import { SelectOption } from "../../../business/models/SelectOption";
import { useActions, useAppState } from "../../../business/overmind";
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

export function GenreFilter() {
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

export function LanguageFilter() {
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
