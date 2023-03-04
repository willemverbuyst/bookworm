import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

type Props<T extends Record<"id", string>> = {
  columns: Array<{ field: keyof T; isNumeric?: boolean }>;
  title: string;
  rows: Array<T>;
};

function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
}: Props<T>) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>{title}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={String(column.field)} isNumeric={column.isNumeric}>
                {String(column.field).replace("_", " ")}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td
                  key={`${row.id}-${row[column.field]}`}
                  isNumeric={column.isNumeric}
                >
                  {String(row[column.field])}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TableOverview;
