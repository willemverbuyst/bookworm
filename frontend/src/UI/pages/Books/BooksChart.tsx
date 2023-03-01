import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import PieChartForStatistics from "../../components/Charts/PieChart";

function BooksChart() {
  const data = useAppState().booksGroupedByLanguage;

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box>
      {data?.length ? (
        <PieChartForStatistics
          colors={colors}
          data={data}
          dataKey="number"
          nameKey="language"
          title="books grouped by languages"
        />
      ) : (
        <p>No books</p>
      )}
    </Box>
  );
}

export default BooksChart;
