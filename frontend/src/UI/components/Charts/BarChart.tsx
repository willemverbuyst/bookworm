import { Box } from "@chakra-ui/react";
import { Bar, BarChart, LabelList } from "recharts";

interface IProps {
  data: Array<{ [key: string]: string | number }>;
  dataKey: string;
  title: string;
}

function BarChartForStatistics({ data, dataKey, title }: IProps) {
  return data ? (
    <Box>
      <Box>{title}</Box>
      <Box>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
        >
          <Bar dataKey={dataKey} fill="#FFBB28">
            <LabelList dataKey="books_written" position="top" fill="#FFBB28" />
          </Bar>
        </BarChart>
      </Box>
    </Box>
  ) : null;
}

export default BarChartForStatistics;
