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
  columns: Array<{ field: keyof T }>;
  title: string;
  rows: Array<T>;
};
export default function TableForOverview<T extends Record<"id", string>>({
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
              <Th key={String(column.field)}>{String(column.field)}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td key={`${row.id}-${row[column.field]}`}>
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
