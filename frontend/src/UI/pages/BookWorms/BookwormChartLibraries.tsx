import { Box, Spinner } from "@chakra-ui/react";
import { Cell, Pie, PieChart } from "recharts";
import { compare } from "../../../business/functions/compare";
import { useAppState } from "../../../business/overmind";
import { useGetBookwormStatsLibrary } from "../../hooks/useGetBookwormStatsLibrary";

interface CustomLabelProps {
  cx: string;
  cy: string;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
}

function getColorIndex(index: number) {
  switch (true) {
    case index === 0:
    case index === 1:
      return 0;
    case index % 2 === 0:
      return index - 1;
    default:
      return index - 2;
  }
}

function BookwormChartLibraries() {
  const { isLoading, colors } = useAppState().app;
  useGetBookwormStatsLibrary();
  const data = useAppState().bookworm.statsLibrary || [];
  const dataForChart = [...data]
    .sort(compare("user_active"))
    .sort(compare("id"))
    .map((d, index) => ({
      userIsActive: `${d.user_active}`,
      libraryName: `${d.library_name}`,
      numberOfBookworms: d.number_of_bookworms_per_library,
      color: colors[getColorIndex(index)],
    }));

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
        {`${dataForChart[index].numberOfBookworms}`}
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
        {dataForChart[index].userIsActive === "true"
          ? `${dataForChart[index].libraryName}`
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
              data={dataForChart}
              dataKey="numberOfBookworms"
              nameKey="userIsActive"
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine={false}
              label={renderCustomizedLabelLibrary}
            >
              {dataForChart.map((entry) => (
                <Cell
                  key={`cell-${entry.libraryName}`}
                  fill={colors[colors.length - 1]}
                />
              ))}
            </Pie>
            <Pie
              data={dataForChart}
              dataKey="numberOfBookworms"
              nameKey="libraryName"
              cx="50%"
              cy="50%"
              outerRadius={160}
              innerRadius={140}
              label={renderCustomizedLabelBookworm}
              stroke=""
            >
              {dataForChart.map((entry) => (
                <Cell
                  key={`cell-${entry.userIsActive}`}
                  fill={entry.userIsActive === "true" ? entry.color : "#fff"}
                />
              ))}
            </Pie>
            <Pie
              data={dataForChart}
              dataKey="numberOfBookworms"
              nameKey="libraryName"
              cx="50%"
              cy="50%"
              outerRadius={145}
              innerRadius={140}
              stroke=""
              // label={renderCustomizedLabelBookworm}
            >
              {dataForChart.map((entry) => (
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

export default BookwormChartLibraries;
