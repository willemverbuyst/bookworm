import { Box, Spinner } from "@chakra-ui/react";
import { Cell, Pie, PieChart } from "recharts";
import { useAppState } from "../../../business/overmind";
import { useGetBookwormStatsLibrary } from "../../hooks";

interface CustomLabelProps {
  cx: string;
  cy: string;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
}

export function BookwormChartLibraries() {
  useGetBookwormStatsLibrary();
  const { isLoading, colors } = useAppState().app;
  const data = useAppState().bookworm.statsLibrary || [];

  if (isLoading) {
    return <Spinner />;
  }

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabelLibrary = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: CustomLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${data[index].numberOfBookworms}`}
      </text>
    );
  };
  const renderCustomizedLabelBookworm = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }: CustomLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#333"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].userIsActive === "true"
          ? `${data[index].libraryName}`
          : ""}
      </text>
    );
  };

  return (
    <Box>
      {data.length ? (
        <Box>
          <PieChart width={1200} height={600}>
            <Pie
              data={data}
              dataKey="numberOfBookworms"
              nameKey="userIsActive"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={renderCustomizedLabelLibrary}
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.libraryName}`}
                  fill={colors[colors.length - 1]}
                />
              ))}
            </Pie>
            <Pie
              data={data}
              dataKey="numberOfBookworms"
              nameKey="libraryName"
              cx="50%"
              cy="50%"
              outerRadius={160}
              innerRadius={140}
              label={renderCustomizedLabelBookworm}
              stroke=""
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.userIsActive}`}
                  fill={
                    entry.userIsActive === "true"
                      ? entry.color
                      : "rgba(255, 255, 255, 0)"
                  }
                />
              ))}
            </Pie>
            <Pie
              data={data}
              dataKey="numberOfBookworms"
              nameKey="libraryName"
              cx="50%"
              cy="50%"
              outerRadius={145}
              innerRadius={140}
              stroke=""
            >
              {data.map((entry) => (
                <Cell
                  key={`cell-${entry.userIsActive}`}
                  fill={
                    entry.userIsActive === "true"
                      ? "rgba(255, 255, 255, 0)"
                      : entry.color
                  }
                />
              ))}
            </Pie>
          </PieChart>
        </Box>
      ) : (
        <p>no libraries</p>
      )}
    </Box>
  );
}
