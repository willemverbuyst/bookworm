import { Box } from "@chakra-ui/react";
import {
  ComposedChart,
  Bar,
  BarChart,
  LabelList,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

interface IProps {
  data: Array<{ [key: string]: string | number }>;
  dataKey: string;
  title: string;
}

function VerticalBarChart({ data, dataKey, title }: IProps) {
  return data ? (
    <Box>
      <Box>{title}</Box>
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
          <Bar dataKey={dataKey} fill="#FFBB28">
            <LabelList dataKey="number" position="right" />
          </Bar>
        </BarChart>
      </Box>
    </Box>
  ) : null;
}

export default VerticalBarChart;
