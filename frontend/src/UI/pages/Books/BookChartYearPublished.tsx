import { Box, Spinner } from "@chakra-ui/react";
import {
  CartesianGrid,
  Label,
  Line,
  LineChart,
  ReferenceLine,
  XAxis,
  YAxis,
} from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetBookStatsYearPublished } from "../../hooks/useGetBookStatsYearPublished";

function BookChartYearPublished() {
  useGetBookStatsYearPublished();
  const { isLoading } = useAppState().app;
  const data = useAppState().book.statsYearPublished || [];

  const max = Math.max(...data.map((i) => i.number));

  const maxYears = data.filter((i) => i.number === max).map((i) => i.name);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data.length ? (
        <Box>
          <LineChart
            width={1000}
            height={700}
            data={data}
            margin={{
              top: 50,
              left: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              interval={10}
            />
            <YAxis interval={1} />
            {maxYears.map((m) => (
              <ReferenceLine key={m} x={m} stroke="red">
                <Label value={m} position="top" />
              </ReferenceLine>
            ))}
            <ReferenceLine y={max} stroke="red">
              <Label value={`MAX ${max}`} position="left" offset={10} />
            </ReferenceLine>
            <Line
              type="monotone"
              dataKey="number"
              stroke="#8884d8"
              strokeWidth={4}
              dot={false}
            />
          </LineChart>
        </Box>
      ) : (
        <p>no books</p>
      )}
    </Box>
  );
}

export default BookChartYearPublished;
