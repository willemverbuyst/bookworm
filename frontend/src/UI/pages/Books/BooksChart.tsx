import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import PieChartForStatistics from "../../components/Charts/PieChart";

const randomColor = () =>
  "#000000".replace(/0/g, () => {
    // eslint-disable-next-line no-bitwise
    return (~~(Math.random() * 16)).toString(16);
  });

export function BooksChartGenre() {
  const data = useAppState().bookStatsGenre || [];
  const dataForChart = data?.map((d) => ({
    genre: d.genre,
    number: d.number_of_books,
  }));

  const colors = data.map(() => randomColor());

  return (
    <Box>
      {data?.length ? (
        <PieChartForStatistics
          colors={colors}
          data={dataForChart}
          dataKey="number"
          nameKey="genre"
          title="books grouped by genres"
        />
      ) : (
        <p>No books</p>
      )}
    </Box>
  );
}

export function BooksChartLanguage() {
  const data = useAppState().bookStatsLanguage || [];
  const dataForChart = data?.map((d) => ({
    language: d.language,
    number: d.number_of_books,
  }));

  const colors = data.map(() => randomColor());

  return (
    <Box>
      {data?.length ? (
        <PieChartForStatistics
          colors={colors}
          data={dataForChart}
          dataKey="number"
          nameKey="language"
          title="books grouped by languages"
        />
      ) : (
        <p>No books</p>
      )}
    </Box>
  );
}
