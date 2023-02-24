import { Box } from "@chakra-ui/react";
import { useAppState } from "../../../business/overmind";
import BarChartForStatistics from "../../components/Charts/BarChart";

export default function ChartWithAuthors() {
  const data = useAppState((state) => state.authorForStatistics);

  if (!data.length) {
    return <p>No Authors</p>;
  }

  return (
    <Box>
      <BarChartForStatistics
        data={data}
        dataKey="books_written"
        title="amount of books written books by authors"
      />
    </Box>
  );
}
