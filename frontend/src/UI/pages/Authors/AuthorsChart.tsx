import { Box, Spinner } from "@chakra-ui/react";
import { Bar, ComposedChart, LabelList, Line, XAxis } from "recharts";
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
            barSize={50}
            layout="horizontal"
            margin={{
              left: 100,
              top: 20,
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
            <Bar dataKey="number" fill="#ED64A6">
              <LabelList dataKey="number" position="top" />
            </Bar>
            <Line dataKey="avg" stroke="#666" strokeWidth={2} dot={false} />
          </ComposedChart>
        </Box>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsChart;
