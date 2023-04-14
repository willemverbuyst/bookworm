import { Box, Spinner } from "@chakra-ui/react";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetBookStatsLanguage } from "../../hooks/useGetBookStatsLanguage";

function BooksChartGenres() {
  useGetBookStatsLanguage();
  const { isLoading } = useAppState().app;
  const data = useAppState().book.statsGenre || [];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data.length ? (
        <Box>
          <BarChart
            width={1000}
            height={1400}
            data={data}
            barSize={25}
            layout="vertical"
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <XAxis type="number" scale="auto" axisLine={false} tick={false} />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              scale="auto"
              width={200}
              tickLine={false}
            />
            <Bar dataKey="number" fill="#FFBB28">
              <LabelList dataKey="number" position="right" />
            </Bar>
          </BarChart>
        </Box>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BooksChartGenres;
