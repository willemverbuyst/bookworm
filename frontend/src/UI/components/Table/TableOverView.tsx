import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ShowDetailsButton } from "../Buttons";

type Props<T extends Record<"id", string>> = {
  columns: Array<{ field: keyof T; isNumeric?: boolean }>;
  title?: string;
  rows: Array<T>;
  action?: (id: string) => void;
};

export function TableOverview<T extends Record<"id", string>>({
  rows,
  columns,
  title,
  action,
}: Props<T>) {
  const ActionButton = ShowDetailsButton;
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
                  <ActionButton id={row.id} action={action} />
                </Td>
              ) : null}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
