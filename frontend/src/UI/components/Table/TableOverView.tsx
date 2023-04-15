import { ViewIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Props<T extends Record<"id", string>> = {
  columns: Array<{ field: keyof T; isNumeric?: boolean }>;
  title: string;
  rows: Array<T>;
  action?: (id: string) => void;
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
}: Props<T>) {
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement="top">{title}</TableCaption>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={String(column.field)} isNumeric={column.isNumeric}>
                {String(column.field).replace(/_/g, " ")}
              </Th>
            ))}
            {action ? <Th>get details</Th> : null}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.id}>
              {columns.map((column) => (
                <Td
                  key={`${row.id}-${String(column.field)}`}
                  isNumeric={column.isNumeric}
                >
                  {row[column.field] == null
                    ? "---"
                    : String(row[column.field])}
                </Td>
              ))}
              {action ? (
                <Td isNumeric>
                  <IconButton
                    aria-label="show details"
                    onClick={
                      action ? () => action(row.id) : () => console.log(row.id)
                    }
                    icon={<ViewIcon />}
                  />
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
