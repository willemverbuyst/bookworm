import { Box, Spinner } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetBookStatsGenre } from "../../hooks/useGetBookStatsGenre";

function BooksChartLanguages() {
  const { isLoading, colors } = useAppState().app;
  useGetBookStatsGenre();
  const data = useAppState().book.statsLanguage || [];
  const dataForChart = data.map((d) => ({
    language: d.language,
    number: d.number_of_books,
  }));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data.length ? (
        <Box>
          <PieChart width={400} height={400}>
            <Legend verticalAlign="bottom" height={36} />
            <Pie
              data={dataForChart}
              dataKey="number"
              nameKey="language"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              label
            >
              {dataForChart.map((entry, index) => (
                <Cell
                  key={`cell-${entry.language}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BooksChartLanguages;
