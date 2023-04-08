import { Box } from "@chakra-ui/react";
import { Bar, Cell, ComposedChart, LabelList, XAxis } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetRentalStatsDuration } from "../../hooks/useGetRentalStatsDuration";

function RentalsDurationChart() {
  useGetRentalStatsDuration();
  const data = useAppState().rental.rentalStatsDuration || [];
  const dataForChart = data.map((d) => ({
    duration: `${d.duration}d`,
    number: Number(d.total_rentals),
  }));

  return (
    <Box>
      {data.length ? (
        <Box>
          <ComposedChart
            width={1000}
            height={700}
            data={dataForChart}
            barSize={80}
            layout="horizontal"
            margin={{
              left: 100,
              top: 20,
            }}
          >
            <XAxis
              dataKey="duration"
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
