import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import BookPieChart from "../../components/Charts/PieChart";

export default function ChartWithBooks() {
  const data = useAppState().booksGroupedByLanguage;

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box>
      {data?.length ? (
        <BookPieChart
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
