import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";

const TableForOverview: React.FC<any> = ({
  rows,
  columns,
  title,
}: any): ReactElement => {
  const [pageSize, setPageSize] = React.useState(10);

  const width = columns.reduce((rv: any, column: { width: any }): number => {
    return rv + (column.width ? column.width : 0);
  }, 10);

  return (
    <Box>
      <Box>{title}</Box>
      <Box>
        {/* <div style={{ display: "flex", height: "100%" }}>
          <div style={{ height: 700, width }}>
            <DataGrid
              rows={rows}
              columns={columns}
              components={{
                Toolbar: GridToolbar,
              }}
              sx={{ border: "none" }}
              pageSize={pageSize}
              onPageSizeChange={(newPage) => setPageSize(newPage)}
              rowsPerPageOptions={[10, 15, 20, 25]}
              pagination
            />
          </div>
        </div> */}
      </Box>
    </Box>
  );
};

export default TableForOverview;
