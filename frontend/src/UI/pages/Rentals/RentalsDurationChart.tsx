import { Box, Spinner } from "@chakra-ui/react";
import { Bar, Cell, ComposedChart, LabelList, XAxis } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetRentalStatsDuration } from "../../hooks";

function RentalsDurationChart() {
  useGetRentalStatsDuration();
  const { isLoading } = useAppState().app;
  const data = useAppState().rental.statsDuration || [];

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
            barSize={80}
            layout="horizontal"
            margin={{
              left: 100,
              top: 20,
            }}
          >
            <XAxis
              dataKey="durationLabel"
              type="category"
              axisLine={false}
              interval={0}
              tickLine={false}
            />
            <Bar dataKey="number">
              {data.map((entry, index) => (
                <Cell
                  key={JSON.stringify(entry)}
                  fill={data[index].duration < 15 ? "green" : "red"}
                />
              ))}
              <LabelList dataKey="number" position="top" />
            </Bar>
          </ComposedChart>
        </Box>
      ) : (
        <p>no rentals</p>
      )}
    </Box>
  );
}

export default RentalsDurationChart;
