import { Box } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";

interface IProps {
  data: Array<{ [key: string]: string | number }>;
  colors: string[];
  dataKey: string;
  nameKey: string;
  title: string;
}

function PieChartForStatistics({
  data,
  colors,
  dataKey,
  nameKey,
  title,
}: IProps) {
  return data ? (
    <Box>
      <Box>{title}</Box>

      <Box>
        <PieChart width={400} height={400}>
          <Legend verticalAlign="bottom" height={36} />
          <Pie
            data={data}
            dataKey={dataKey}
            nameKey={nameKey}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#0088FE"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.text}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </Box>
    </Box>
  ) : null;
}

export default PieChartForStatistics;
