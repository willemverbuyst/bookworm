import { Box, Spinner } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { useAppState } from "../../../business/overmind";
import { COLORS } from "../../../configuration/chart";

export function BooksChartLanguages() {
  const { isLoading } = useAppState().book;
  const data = useAppState().book.statsLanguage || [];

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
              data={data}
              dataKey="numberOfBooks"
              nameKey="language"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${entry.language}`}
                  fill={COLORS[index % COLORS.length]}
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
