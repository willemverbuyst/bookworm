import { Box, Spinner } from "@chakra-ui/react";
import { Bar, ComposedChart, LabelList, Line, XAxis, YAxis } from "recharts";
import { useAppState } from "../../../business/overmind";

export function AuthorsChart() {
  const { isLoading } = useAppState().app;
  const { pagesPerAuthor: data = [] } = useAppState().author.statsPage || {};

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
            data={data}
            layout="horizontal"
            margin={{
              left: 100,
              top: 50,
            }}
          >
            <XAxis
              dataKey="author"
              type="category"
              height={200}
              axisLine={false}
              interval={0}
              tickLine={false}
              angle={-35}
              textAnchor="end"
            />
            <YAxis yAxisId="numberOfPages" orientation="left" hide />
            <YAxis yAxisId="numberOfBooks" orientation="right" hide />
            <Bar yAxisId="numberOfPages" dataKey="numberOfPages" fill="#ED64A6">
              <LabelList dataKey="numberOfPages" position="top" />
            </Bar>
            <Bar yAxisId="numberOfBooks" dataKey="numberOfBooks" fill="#666">
              <LabelList
                dataKey="numberOfBooks"
                position="top"
                offset={-25}
                fill="#fff"
              />
            </Bar>

            <Line
              yAxisId="numberOfPages"
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
