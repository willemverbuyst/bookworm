import { Box } from "@mui/material";
import React, { ReactElement } from "react";

import { useAppState } from "../../../business/overmind";
import BookPieChart from "../../components/Charts/PieChart";

export const ChartWithBooks: React.FC = (): ReactElement => {
  const data = useAppState((state) => state.booksGroupedByLanguage);

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Box>
      {data ? (
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
};
