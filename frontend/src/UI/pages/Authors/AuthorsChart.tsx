import { Box, Spinner } from "@chakra-ui/react";
import { Bar, ComposedChart, LabelList, Line, XAxis, YAxis } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetAuthorStatsPage } from "../../hooks/useGetAuthorStatsPage";

function AuthorsChart() {
  const { isLoading } = useAppState().app;
  useGetAuthorStatsPage();
  const { pages_per_author: data = [], average_pages: avg } =
    useAppState().author.statsPage || {};

  const dataForChart = data.map((d) => ({
    name: d.author,
    number: Number(d.number_of_pages),
    book: Number(d.number_of_books),
    avg,
  }));

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data.length ? (
        <Box>
          <ComposedChart
            width={1000}
            height={700}
            data={dataForChart}
            layout="horizontal"
            margin={{
              left: 100,
              top: 50,
            }}
          >
            <XAxis
              dataKey="name"
              type="category"
              height={200}
              axisLine={false}
              interval={0}
              tickLine={false}
              angle={-35}
              textAnchor="end"
            />
            <YAxis yAxisId="number" orientation="left" hide />
            <YAxis yAxisId="book" orientation="right" hide />
            <Bar yAxisId="number" dataKey="number" fill="#ED64A6">
              <LabelList dataKey="number" position="top" />
            </Bar>
            <Bar yAxisId="book" dataKey="book" fill="#666">
              <LabelList
                dataKey="book"
                position="top"
                offset={-25}
                fill="#fff"
              />
            </Bar>

            <Line
              yAxisId="number"
              dataKey="avg"
              stroke="#ED64A6"
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </Box>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsChart;
