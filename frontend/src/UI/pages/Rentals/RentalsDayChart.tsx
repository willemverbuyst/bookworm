import { Box, Spinner } from "@chakra-ui/react";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { useAppState } from "../../../business/overmind";

export function RentalsDayChart() {
  const { isLoading } = useAppState().rental;
  const data = useAppState().rental.statsDay || [];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box>
      {data.length ? (
        <Box>
          <RadarChart
            width={1000}
            height={700}
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="day" />
            <PolarRadiusAxis angle={30} domain={[0, data[0].fullMark]} />
            <Radar
              name="Rentals"
              dataKey="rentals"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Returns"
              dataKey="returns"
              stroke="#82ca9d"
              fill="#82ca9d"
              fillOpacity={0.6}
            />
            <Legend />
          </RadarChart>
        </Box>
      ) : (
        <p>no rentals</p>
      )}
    </Box>
  );
}
