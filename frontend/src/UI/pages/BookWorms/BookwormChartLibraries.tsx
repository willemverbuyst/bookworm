import { Box, Spinner } from "@chakra-ui/react";
import { Cell, Legend, Pie, PieChart } from "recharts";
import { BookwormStatsLibrary } from "../../../business/models/Bookworm";
import { useAppState } from "../../../business/overmind";
import { useGetBookwormStatsLibrary } from "../../hooks/useGetBookwormStatsLibrary";

function BookwormChartLibraries() {
  const { isLoading } = useAppState().app;
  useGetBookwormStatsLibrary();
  const data = useAppState().bookworm.statsLibrary || [];

  function sumItems(items: BookwormStatsLibrary[]): BookwormStatsLibrary[] {
    const result: { [library_name: string]: BookwormStatsLibrary } = {};
    items.reduce((acc, item) => {
      if (item.library_name in acc) {
        acc[item.library_name].number_of_bookworms_per_library +=
          item.number_of_bookworms_per_library;
      } else {
        acc[item.library_name] = { ...item };
      }
      return acc;
    }, result);
    return Object.values(result);
  }

  function sumItems2(items: BookwormStatsLibrary[]): BookwormStatsLibrary[] {
    const result: { [user_active: string]: BookwormStatsLibrary } = {};
    items.reduce((acc, item) => {
      if (String(item.user_active) in acc) {
        acc[String(item.user_active)].number_of_bookworms_per_library +=
          item.number_of_bookworms_per_library;
      } else {
        acc[String(item.user_active)] = { ...item };
      }
      return acc;
    }, result);
    return Object.values(result);
  }

  const dataForChart = sumItems(data).map((d) => ({
    libraryName: `${d.library_name}`,
    numberOfBookworms: d.number_of_bookworms_per_library,
  }));

  const dataForChart2 = sumItems2(data).map((d) => ({
    userIsActive: `${d.user_active}`,
    numberOfBookworms: d.number_of_bookworms_per_library,
  }));

  console.log("dataForChart, dataForChart2 :>> ", dataForChart, dataForChart2);

  if (isLoading) {
    return <Spinner />;
  }

  const colors = ["#0088FE", "#FFBB28"];

  return (
    <Box>
      {data.length ? (
        <Box>
          <PieChart width={400} height={400}>
            <Legend verticalAlign="bottom" height={36} />
            <Pie
              data={dataForChart2}
              dataKey="numberOfBookworms"
              nameKey="userIsActive"
              cx="50%"
              cy="50%"
              outerRadius={60}
              label
            >
              {dataForChart2.map((entry, index) => (
                <Cell
                  key={`cell-${entry.userIsActive}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Pie
              data={dataForChart}
              dataKey="numberOfBookworms"
              nameKey="libraryName"
              cx="50%"
              cy="50%"
              outerRadius={90}
              innerRadius={70}
              label
            >
              {dataForChart.map((entry, index) => (
                <Cell
                  key={`cell-${entry.libraryName}`}
                  fill={colors[index % colors.length]}
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
