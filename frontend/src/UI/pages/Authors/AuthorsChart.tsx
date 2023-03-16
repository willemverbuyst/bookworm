import { Box } from "@chakra-ui/react";
import { BarChart, XAxis, Bar, LabelList } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetAuthorStatsPage } from "../../hooks/useGetAuthorStatsPage";

function AuthorsChart() {
  useGetAuthorStatsPage();
  const data = useAppState().authorStatsPage || [];
  const dataForChart = data.map((d) => ({
    name: d.author,
    number: Number(d.number_of_pages),
  }));

  return (
    <Box>
      {data.length ? (
        <Box>
          <BarChart
            width={1000}
            height={900}
            data={dataForChart}
            barSize={50}
            layout="horizontal"
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 100,
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
          </BarChart>
        </Box>
      ) : (
        <p>no authors</p>
      )}
    </Box>
  );
}

export default AuthorsChart;
