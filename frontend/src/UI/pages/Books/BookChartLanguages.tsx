import { Box } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetBookStatsGenre } from "../../hooks/useGetBookStatsGenre";

function BooksChartLanguages() {
  useGetBookStatsGenre();
  const data = useAppState().book.bookStatsLanguage || [];
  const dataForChart = data.map((d) => ({
    language: d.language,
    number: d.number_of_books,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

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
              outerRadius={100}
              fill="#0088FE"
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
